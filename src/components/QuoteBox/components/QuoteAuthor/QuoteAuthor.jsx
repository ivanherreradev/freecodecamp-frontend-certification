import React from 'react'
import styles from './QuoteAuthor.module.css'

const QuoteAuthor = ({ author }) => {
  return (
    <p id="author" className={styles.quoteAuthor}>
      {author}
    </p>
  )
}

export default QuoteAuthor
