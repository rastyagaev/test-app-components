var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import Items from '../items';

import Styles from './Navbar.module.css';

var Navbar = (_temp = _class = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Navbar.prototype.render = function render() {
    return React.createElement(
      'div',
      { className: Styles.host },
      React.createElement(
        Items,
        { spaceBetween: true, spaceAround: true, className: Styles.items },
        React.createElement(
          'h1',
          { className: 'logo' },
          React.createElement(
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
}(React.Component), _class.defaultProps = {
  logoLink: '/',
  logoText: 'Logo 🤷'
}, _temp);
export { Navbar as default };
Navbar.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node,
  logoLink: PropTypes.string,
  logoText: PropTypes.string
} : {};