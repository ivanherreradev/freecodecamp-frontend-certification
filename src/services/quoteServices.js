export const fetchRandomQuote = async () => {
  const response = await fetch('https://api.quotable.io/random')
  const data = await response.json()
  const { content, author } = data
  return { text: content, author }
}
