import React from 'react'
import styles from './QuoteText.module.css'

const QuoteText = ({ text }) => {
  return (
    <p id="text">
      <i className="bx bxs-quote-alt-left" />
      <span className={styles.text}>{text}</span>
      <i className="bx bxs-quote-alt-right" />
    </p>
  )
}

export default QuoteText
