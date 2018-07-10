import React from 'react'
import PropTypes from 'prop-types'
import Items from '../items'

import Styles from './Navbar.module.css'

export default class Navbar extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    logoLink: PropTypes.string,
    logoText: PropTypes.string
  }

  static defaultProps = {
    logoLink: '/',
    logoText: 'Logo 🤷'
  }

  render() {
    return <div className={Styles.host}>
      <Items spaceBetween spaceAround className={Styles.items}>
        <h1 className="logo">
          <a href={this.props.logoLink}>
            {this.props.logoText}
          </a>
        </h1>
        {this.props.children}
      </Items>
    </div>
  }
}
