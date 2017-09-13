'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\tfill: ', ';\n'], ['\n\tfill: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tfont-size: 0;\n\tline-height: 0;\n'], ['\n\tfont-size: 0;\n\tline-height: 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('@patternplate/components');

var _toggleButton = require('./common/toggle-button');

var _toggleButton2 = _interopRequireDefault(_toggleButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = CodeButton;


function CodeButton(props) {
	return _react2.default.createElement(
		StyledToggleButton,
		{ enabled: props.enabled, shortcut: props.shortcut },
		_react2.default.createElement(StyledIcon, { enabled: props.enabled, symbol: 'code' }),
		' ',
		props.shortcut.toString()
	);
}

var COLOR = function COLOR(props) {
	return props.enabled ? props.theme.active : props.theme.color;
};

var StyledIcon = (0, _components.styled)(_components.Icon)(_templateObject, COLOR);

var StyledToggleButton = (0, _components.styled)(_toggleButton2.default)(_templateObject2);