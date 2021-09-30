export const getQuote = () => {
    return fetch(`https://type.fit/api/quotes`)
    .then(result => result.json())
  }