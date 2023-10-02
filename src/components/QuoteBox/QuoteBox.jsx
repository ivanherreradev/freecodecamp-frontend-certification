import React from 'react'
import styles from './QuoteBox.module.css'

const QuoteBox = ({ quote }) => {
  return (
    <main id="quote-box">
      <header>
        <h1>Quote of the Day</h1>

        <section>
          <p id="text">{quote.text}</p>
          <p id="author">{quote.author}</p>
        </section>
      </header>
    </main>
  )
}

export default QuoteBox
