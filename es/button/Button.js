import React from 'react';
import PropTypes from 'prop-types';

import Styles from './Button.module.css';

var MODIFIERS = ['default', 'primary'];

var Button = function Button(props) {
  return React.createElement(
    'span',
    { className: Styles.button + ' ' + Styles[props.modifier] },
    typeof props.children === "string" ? React.createElement(
      'span',
      null,
      props.children
    ) : props.children
  );
};

Button.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node,
  modifier: PropTypes.oneOf(MODIFIERS)
} : {};

Button.defaultProps = {
  modifier: 'default'
};

export default Button;