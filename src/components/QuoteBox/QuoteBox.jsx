import React from 'react'
import styles from './QuoteBox.module.css'

const QuoteBox = ({ quote, handleNewQuote }) => {
  return (
    <main className={styles.quoteBox} id="quote-box">
      <header>
        <h1>Quote of the Day</h1>

        <section className={styles.quote}>
          <p id="text">{quote.text}</p>
          <p id="author">{quote.author}</p>
        </section>

        <button
          id="new-quote"
          onClick={handleNewQuote}
        >
          New Quote
        </button>
      </header>
    </main>
  )
}

export default QuoteBox
