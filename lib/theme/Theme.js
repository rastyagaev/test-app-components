'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ThemeModule = require('./Theme.module.css');

var _ThemeModule2 = _interopRequireDefault(_ThemeModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Theme(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'div',
    { className: _ThemeModule2.default.themeRoot },
    children
  );
}

exports.default = Theme;
module.exports = exports['default'];