'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getModifiedFiles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

let readManifest = (() => {
	var _ref = _asyncToGenerator(function* (path) {
		return yield (0, _sander.readFile)((0, _path.resolve)(path, 'pattern.json')).then(function (content) {
			return JSON.parse(content.toString('utf-8'));
		});
	});

	return function readManifest(_x) {
		return _ref.apply(this, arguments);
	};
})();

let getPatternFilesMtime = (() => {
	var _ref2 = _asyncToGenerator(function* (files) {
		const tasks = files.map((() => {
			var _ref3 = _asyncToGenerator(function* (file) {
				var _ref4 = yield (0, _sander.stat)(file);

				const mtime = _ref4.mtime;

				return mtime;
			});

			return function (_x3) {
				return _ref3.apply(this, arguments);
			};
		})());

		return yield Promise.all(tasks);
	});

	return function getPatternFilesMtime(_x2) {
		return _ref2.apply(this, arguments);
	};
})();

let getModifiedFiles = (() => {
	var _ref5 = _asyncToGenerator(function* (mtime, files) {
		const mtimes = yield getPatternFilesMtime(files);
		return files.filter(function (file, index) {
			return mtimes[index].getTime() > mtime;
		});
	});

	return function getModifiedFiles(_x4, _x5) {
		return _ref5.apply(this, arguments);
	};
})();

let getPatternMtimes = (() => {
	var _ref6 = _asyncToGenerator(function* (search, options) {
		const paths = yield (0, _readTree2.default)(search);
		const settings = _extends({}, defaults, options);
		const filter = getFilter(settings.filters);

		const items = paths.filter(function (item) {
			return (0, _path.basename)(item) === 'pattern.json';
		}).filter(function (item) {
			return !item.includes('@environments');
		}).map(function (item) {
			const id = (0, _patternplateTransformsCore.pathToId)(search, item);
			const path = (0, _path.dirname)(item);
			const files = (0, _readTree2.default)(path);
			const manifest = readManifest(path);
			return { id: id, path: path, files: files, manifest: manifest };
		});

		const readTasks = items.map((0, _throat2.default)(5, (() => {
			var _ref7 = _asyncToGenerator(function* (item) {
				const mtimes = yield getPatternFilesMtime((yield item.files));
				const mtime = yield getLatestMtime(mtimes);

				const files = (yield item.files).filter(filter);

				return _extends({}, item, {
					files: files,
					mtime: mtime,
					mtimes: mtimes
				});
			});

			return function (_x9) {
				return _ref7.apply(this, arguments);
			};
		})()));

		const readPatterns = yield Promise.all(readTasks);

		const measurePatterns = readPatterns.filter(function (readPattern) {
			return readPattern.files.length > 1;
		}).map((() => {
			var _ref8 = _asyncToGenerator(function* (readPattern) {
				readPattern.manifest = yield readPattern.manifest;
				const dependencyMtimes = settings.resolveDependencies ? getDependencyMtimes(readPattern, readPatterns) : [];

				const mtime = getLatestMtime([readPattern.mtime].concat(_toConsumableArray(dependencyMtimes)));

				readPattern.mtime = mtime;
				return readPattern;
			});

			return function (_x10) {
				return _ref8.apply(this, arguments);
			};
		})());

		return yield Promise.all(measurePatterns);
	});

	return function getPatternMtimes(_x7, _x8) {
		return _ref6.apply(this, arguments);
	};
})();

var _path = require('path');

var _sander = require('sander');

var _lodash = require('lodash');

var _patternplateTransformsCore = require('patternplate-transforms-core');

var _throat = require('throat');

var _throat2 = _interopRequireDefault(_throat);

var _readTree = require('../filesystem/read-tree');

var _readTree2 = _interopRequireDefault(_readTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function getLatestMtime(mtimes) {
	const times = mtimes.map(mtime => {
		return { stamp: mtime.getTime(), date: mtime };
	});

	const latest = times.sort((a, b) => b.stamp - a.stamp)[0];
	return latest.date;
}

function getDependencyMtimes(pattern, patterns) {
	const manifest = pattern.manifest;
	const dependencyIds = Object.values(manifest.patterns || {});
	return dependencyIds.map(id => (0, _lodash.find)(patterns, { id: id })).reduce((mtimes, dependency) => {
		if (!dependency) {
			return mtimes;
		}

		return [].concat(_toConsumableArray(mtimes), [dependency.mtime], _toConsumableArray(getDependencyMtimes(dependency)));
	}, []);
}

function isPatternJson(filePath) {
	return (0, _path.basename)(filePath) === 'pattern.json';
}

function getFilter() {
	let filters = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	const inFormats = Array.isArray(filters.inFormats) ? filters.inFormats : [];
	const baseNames = Array.isArray(filters.baseNames) ? filters.baseNames : [];

	const filterByInFormat = inFormats.length ? filePath => inFormats.includes((0, _path.extname)(filePath).slice(1)) : filePath => filePath;

	const filterByBasename = baseNames.length ? filePath => inFormats.includes((0, _path.extname)(filePath).slice(1)) : filePath => filePath;

	return filePath => isPatternJson(filePath) || filterByBasename(filePath) && filterByInFormat(filePath);
}

const defaults = {
	resolveDependencies: false
};

exports.default = getPatternMtimes;
exports.getModifiedFiles = getModifiedFiles;