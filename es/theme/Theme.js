import React from 'react';
import Styles from './Theme.module.css';

function Theme(_ref) {
  var children = _ref.children;

  return React.createElement(
    'div',
    { className: Styles.themeRoot },
    children
  );
}

export default Theme;