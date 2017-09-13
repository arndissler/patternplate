'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

exports.btoa = btoa;
exports.parse = parse;
exports.png = png;
exports.purge = purge;
exports.render = render;
exports.sanitize = sanitize;
exports.stringify = stringify;

var _btoa = require('btoa');

var _btoa2 = _interopRequireDefault(_btoa);

var _react = require('react');

var _components = require('@patternplate/components');

var _xmldom = require('xmldom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var parser = new _xmldom.DOMParser();
var serializer = new _xmldom.XMLSerializer();

var TAG_NAMES = ['circle', 'g', 'path', 'polygon', 'rect', 'svg'];

var ATTRIBUTES = {
	circle: ['cx', 'cy', 'r', 'fill', 'stroke', 'style'],
	g: ['x', 'y', 'style'],
	path: ['d', 'fill', 'stroke', 'style'],
	polygon: ['points', 'fill', 'stroke', 'style'],
	rect: ['x', 'y', 'width', 'height', 'fill', 'stroke', 'style'],
	svg: ['width', 'height', 'viewBox', 'x', 'y', 'style', 'xmlns']
};

function attributes(node, key) {
	return (ATTRIBUTES[node.tagName] || []).reduce(function (props, name) {
		var attribute = node.attributes.getNamedItem(name);
		if (attribute && attribute.specified) {
			props[name] = attribute.value;
		}
		return props;
	}, { key: key });
}

function btoa(source) {
	return 'data:image/svg+xml;base64,' + (0, _btoa2.default)(source);
}

function parse(source) {
	var doc = parser.parseFromString(source, 'image/svg+xml');
	var parsed = [].concat(_toConsumableArray(doc.childNodes)).find(function (node) {
		return node.tagName === 'svg';
	});
	parsed.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
	return parsed;
}

function png(source) {
	return new Promise(function (resolve, reject) {
		var img = new global.Image();
		var canvas = global.document.createElement('canvas');
		var ratio = global.devicePixelRatio || 1;

		canvas.width = 16 * ratio;
		canvas.height = 16 * ratio;

		var context = canvas.getContext('2d');

		img.onload = function () {
			context.drawImage(img, 0, 0);
			resolve(canvas.toDataURL('image/png'));
		};

		img.onerror = function (err) {
			return reject(err);
		};

		img.src = btoa(source);
	});
}

function purge(parsed) {
	return [].concat(_toConsumableArray(parsed)).filter(function (node) {
		return TAG_NAMES.includes(node.tagName);
	}).map(function (node) {
		node.childNodes = purge(node.childNodes);

		var attributes = ATTRIBUTES[node.tagName] || [];

		for (var i = 0; i < node.attributes.length; i++) {
			var attribute = node.attributes[i];
			if (!attributes.includes(attribute.name)) {
				node.removeAttribute(attribute.name);
			}
		}

		return node;
	});
}

function render(element) {
	var _element = _slicedToArray(element, 3),
	    tagName = _element[0],
	    props = _element[1],
	    _element$ = _element[2],
	    children = _element$ === undefined ? [] : _element$;

	var style = props.style,
	    rest = _objectWithoutProperties(props, ['style']);

	var tag = (0, _components.styled)(tagName)(_templateObject, style);
	return (0, _react.createElement)(tag, rest, children.map(function (c) {
		return render(c);
	}));
}

function sanitize(parsed) {
	return [].concat(_toConsumableArray(parsed)).map(function (node, i) {
		return [node.tagName, attributes(node, i), sanitize(node.childNodes)];
	});
}

function stringify(tree) {
	return serializer.serializeToString(tree);
}