import React from 'react'
import QuoteBox from './components/QuoteBox/QuoteBox'
import { useQuote } from './utils/hooks/useQuote'
import './App.css'

const App = () => {
  const { quote, handleNewQuote } = useQuote()

  return (
    <>
      <QuoteBox quote={quote} handleNewQuote={handleNewQuote} />
    </>
  )
}

export default App
