export const copyToClipboard = (text, author) => {
  const string = `"${text}" - ${author}`
  navigator.clipboard.writeText(string)
}
