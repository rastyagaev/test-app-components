function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import Items from '../items';

import Styles from './Footer.module.css';

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
    return React.createElement(
      Items,
      { spaceBetween: true, spaceAround: true, className: Styles.footer },
      React.createElement(
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
}(React.Component);

export { Footer as default };
Footer.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node,
  motto: PropTypes.string
} : {};