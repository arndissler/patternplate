'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _item = require('../selectors/item');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(withActiveForPattern);


function withActiveForPattern(state) {
	var item = (0, _item2.default)(state);
	return {
		active: item ? item.type === 'pattern' : false
	};
}