import React, { useEffect, useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox/QuoteBox'
import { fetchRandomQuote } from './services/quoteServices'

const App = () => {
  const [quote, setQuote] = useState({ text: '', author: '' })

  const handleNewQuote = async () => {
    try {
      const { text, author } = await fetchRandomQuote()
      setQuote({ text, author })
    } catch (error) {
      console.error('Error fetching quote:', error)
    }
  }

  useEffect(() => {
    handleNewQuote()
  }, [])

  return (
    <>
      <QuoteBox quote={quote} />
    </>
  )
}

export default App
