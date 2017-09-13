'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _arson = require('arson');

var _arson2 = _interopRequireDefault(_arson);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = highlight;


var startWorker = (0, _lodash.memoize)(function (url) {
	var _global = global,
	    Worker = _global.Worker;

	return new Worker(url);
});

function highlight(options) {
	return new Promise(function (resolve, reject) {
		var worker = startWorker(options.worker);

		var onWorkerMessage = function onWorkerMessage(e) {
			var data = _arson2.default.parse(e.data);

			if (data.id !== options.id) {
				return;
			}

			if (data.payload.type === 'error') {
				return reject(data.payload.error);
			}

			resolve(data);
			worker.removeEventListener('message', onWorkerMessage);
		};

		worker.addEventListener('message', onWorkerMessage);
		worker.postMessage(_arson2.default.stringify(options));
	});
}