import React from 'react'
import styles from './QuoteBox.module.css'
import NewQuote from '../NewQuote/NewQuote'

const QuoteBox = ({ quote, handleNewQuote }) => {
  return (
    <main className={styles.quoteBox} id="quote-box">
      <header>
        <h1>Quote of the Day</h1>

        <section className={styles.quote}>
          <p id="text">{quote.text}</p>
          <p id="author">{quote.author}</p>
        </section>

        <footer className={styles.features}>
          <ul>
            <li>Speak</li>
            <li>Copy</li>
            <li>
              <a
                id="tweet-quote"
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  `"${quote.text}" - ${quote.author}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
          <NewQuote handleNewQuote={handleNewQuote} />
        </footer>
      </header>
    </main>
  )
}

export default QuoteBox
