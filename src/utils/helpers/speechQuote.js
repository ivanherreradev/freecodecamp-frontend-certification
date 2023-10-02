export const speechQuote = (text, author) => {
  const synth = window.speechSynthesis

  if (!synth.speaking) {
    const utterance = new SpeechSynthesisUtterance(
      `Quote of the day: ${text} by ${author}`
    )
    utterance.lang = 'en-US'
    synth.speak(utterance)
  }
}
