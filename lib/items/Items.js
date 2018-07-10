'use strict';

exports.__esModule = true;
exports.Spacing = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ItemsModule = require('./Items.module.css');

var _ItemsModule2 = _interopRequireDefault(_ItemsModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Items = function Items(_ref) {
  var children = _ref.children,
      spaceBetween = _ref.spaceBetween,
      spaceAround = _ref.spaceAround,
      direction = _ref.direction,
      className = _ref.className;
  return _react2.default.createElement(
    'div',
    {
      className: className + ' ' + _ItemsModule2.default.items + ' ' + (spaceBetween ? 'space-between' : '') + ' ' + (spaceAround ? 'space-around' : '') + ' ' + direction },
    children
  );
};

Items.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node,
  spaceAround: _propTypes2.default.bool,
  spaceBetween: _propTypes2.default.bool,
  direction: _propTypes2.default.oneOf(['column', 'row'])
} : {};

Items.defaultProps = {
  spaceAround: false,
  spaceBetween: false,
  direction: 'row'
};

var Spacing = exports.Spacing = function Spacing() {
  return _react2.default.createElement('div', { className: _ItemsModule2.default.spacing });
};

exports.default = Items;