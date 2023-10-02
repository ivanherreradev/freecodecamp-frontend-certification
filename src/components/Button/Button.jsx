import React from 'react'
import styles from './Button.module.css'

const Button = ({ children, onClick, linkProps }) => {
  return (
    <button onClick={onClick} className={styles.Button}>
      {linkProps ? <a {...linkProps}>{children}</a> : children}
    </button>
  )
}

export default Button
