import React, { useState } from 'react';

const quotes = [
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  }
];

const QuoteGenerator = () => {
  const [randomQuote, setRandomQuote] = useState({});

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  };

  return (
    <div>
      <h1>Quote Generator</h1>
      <button onClick={getRandomQuote}>Randomize Qoute!</button>
      <blockquote>
        <p>{randomQuote.text}</p>
        <footer>{randomQuote.author}</footer>
      </blockquote>
    </div>
  );
};

export default QuoteGenerator;