'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _items = require('../items');

var _items2 = _interopRequireDefault(_items);

var _NavbarModule = require('./Navbar.module.css');

var _NavbarModule2 = _interopRequireDefault(_NavbarModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = (_temp = _class = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Navbar.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { className: _NavbarModule2.default.host },
      _react2.default.createElement(
        _items2.default,
        { spaceBetween: true, spaceAround: true, className: _NavbarModule2.default.items },
        _react2.default.createElement(
          'h1',
          { className: 'logo' },
          _react2.default.createElement(
            'a',
            { href: this.props.logoLink },
            this.props.logoText
          )
        ),
        this.props.children
      )
    );
  };

  return Navbar;
}(_react2.default.Component), _class.defaultProps = {
  logoLink: '/',
  logoText: 'Logo 🤷'
}, _temp);
exports.default = Navbar;
Navbar.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node,
  logoLink: _propTypes2.default.string,
  logoText: _propTypes2.default.string
} : {};
module.exports = exports['default'];