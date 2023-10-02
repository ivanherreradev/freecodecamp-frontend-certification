import React, { useEffect, useState } from 'react'
import { fetchRandomQuote } from '../../services/quoteServices'

export const useQuote = () => {
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

  return { quote, handleNewQuote }
}
