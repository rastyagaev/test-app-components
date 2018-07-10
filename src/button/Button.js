import React from 'react'
import PropTypes from 'prop-types'

import Styles from './Button.module.css'

const MODIFIERS = ['default', 'primary']

const Button = props => <span className={`${Styles.button} ${Styles[props.modifier]}`}>
  {
    typeof props.children === "string" ?
    <span>{props.children}</span> :
    props.children
  }
</span>

Button.propTypes = {
  children: PropTypes.node,
  modifier: PropTypes.oneOf(MODIFIERS)
}

Button.defaultProps = {
  modifier: 'default'
}

export default Button
