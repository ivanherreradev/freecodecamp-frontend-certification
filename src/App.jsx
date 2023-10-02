import React, { useEffect, useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox/QuoteBox'

const App = () => {
  const [quote, setQuote] = useState({ text: '', author: '' })

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((res) => res.json())
      .then((data) => setQuote({ text: data.content, author: data.author }))
  }, [])

  return (
    <>
      <QuoteBox quote={quote} />
    </>
  )
}

export default App
