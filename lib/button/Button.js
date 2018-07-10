'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ButtonModule = require('./Button.module.css');

var _ButtonModule2 = _interopRequireDefault(_ButtonModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MODIFIERS = ['default', 'primary'];

var Button = function Button(props) {
  return _react2.default.createElement(
    'span',
    { className: _ButtonModule2.default.button + ' ' + _ButtonModule2.default[props.modifier] },
    typeof props.children === "string" ? _react2.default.createElement(
      'span',
      null,
      props.children
    ) : props.children
  );
};

Button.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node,
  modifier: _propTypes2.default.oneOf(MODIFIERS)
} : {};

Button.defaultProps = {
  modifier: 'default'
};

exports.default = Button;
module.exports = exports['default'];