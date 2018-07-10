import React from 'react'
import Styles from './Theme.module.css';

function Theme({children}) {
  return <div className={Styles.themeRoot}>{children}</div>
}

export default Theme
