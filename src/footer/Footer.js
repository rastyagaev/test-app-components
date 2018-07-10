import React from 'react'
import PropTypes from 'prop-types'
import Items from '../items'

import Styles from './Footer.module.css'

export default class Footer extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    motto: PropTypes.string
  }

  years() {
    return new Date().getFullYear()
  }

  render() {
    return (<Items spaceBetween spaceAround className={Styles.footer}>
      <span>{this.props.motto}; &copy; {this.years()}</span>
      {this.props.children}
    </Items>)
  }
}
