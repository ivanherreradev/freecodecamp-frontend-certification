export const generateTweetUrl = (text, author) => {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${text}" - ${author}`
  )}`
  return tweetUrl
}
