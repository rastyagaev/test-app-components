'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _items = require('../items');

var _items2 = _interopRequireDefault(_items);

var _FooterModule = require('./Footer.module.css');

var _FooterModule2 = _interopRequireDefault(_FooterModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Footer.prototype.years = function years() {
    return new Date().getFullYear();
  };

  Footer.prototype.render = function render() {
    return _react2.default.createElement(
      _items2.default,
      { spaceBetween: true, spaceAround: true, className: _FooterModule2.default.footer },
      _react2.default.createElement(
        'span',
        null,
        this.props.motto,
        '; \xA9 ',
        this.years()
      ),
      this.props.children
    );
  };

  return Footer;
}(_react2.default.Component);

exports.default = Footer;
Footer.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node,
  motto: _propTypes2.default.string
} : {};
module.exports = exports['default'];