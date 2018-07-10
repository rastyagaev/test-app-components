import React from 'react';
import PropTypes from 'prop-types';

import Styles from './Items.module.css';

var Items = function Items(_ref) {
  var children = _ref.children,
      spaceBetween = _ref.spaceBetween,
      spaceAround = _ref.spaceAround,
      direction = _ref.direction,
      className = _ref.className;
  return React.createElement(
    'div',
    {
      className: className + ' ' + Styles.items + ' ' + (spaceBetween ? 'space-between' : '') + ' ' + (spaceAround ? 'space-around' : '') + ' ' + direction },
    children
  );
};

Items.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node,
  spaceAround: PropTypes.bool,
  spaceBetween: PropTypes.bool,
  direction: PropTypes.oneOf(['column', 'row'])
} : {};

Items.defaultProps = {
  spaceAround: false,
  spaceBetween: false,
  direction: 'row'
};

export var Spacing = function Spacing() {
  return React.createElement('div', { className: Styles.spacing });
};

export default Items;