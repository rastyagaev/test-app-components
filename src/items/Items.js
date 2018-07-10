import React from 'react'
import PropTypes from 'prop-types'

import Styles from './Items.module.css'

const Items = ({children, spaceBetween, spaceAround, direction, className}) => <div
  className={`${className} ${Styles.items} ${spaceBetween ? 'space-between' : ''} ${spaceAround ? 'space-around' : ''} ${direction}`}>
  {children}
</div>

Items.propTypes = {
  children: PropTypes.node,
  spaceAround: PropTypes.bool,
  spaceBetween: PropTypes.bool,
  direction: PropTypes.oneOf(['column', 'row'])
}

Items.defaultProps = {
  spaceAround: false,
  spaceBetween: false,
  direction: 'row'
}

export const Spacing = () => <div className={Styles.spacing} />

export default Items
