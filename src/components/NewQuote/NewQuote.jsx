import React from 'react'

const NewQuote = ({ handleNewQuote }) => {
  return (
    <button id="new-quote" onClick={handleNewQuote} className="newQuoteButton">
      New Quote
    </button>
  )
}

export default NewQuote
