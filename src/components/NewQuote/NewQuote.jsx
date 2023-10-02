import React from 'react'
import styles from './NewQuote.module.css'

const NewQuote = ({ handleNewQuote }) => {
  return (
    <button id="new-quote" onClick={handleNewQuote} className={styles.newQuoteButton}>
      New Quote
    </button>
  )
}

export default NewQuote
