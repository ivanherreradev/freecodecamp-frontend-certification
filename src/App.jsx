import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [quote, setQuote] = useState({ text: '', author: '' })

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((res) => res.json())
      .then((data) => setQuote({ text: data.content, author: data.author }))
  }, [])

  return (
    <div>
      <h1>Quote of the Day</h1>
      <p id="text">{quote.text}</p>
      <p id="author">{quote.author}</p>
    </div>
  )
}

export default App
