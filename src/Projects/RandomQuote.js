import React from 'react'
import { useState } from 'react'

const RandomQuote = () => {
    const [quotes, setQuotes] = useState(['quote1', 'quote2', 'quote3', 'quote4'])
    const [quote, setQuote] = useState('Click the button for a random quote')
    const [newQuote, setNewQuote] = useState("")
  
  
    const handleClick = () => {
      let randomNum = Math.floor(Math.random()*quotes.length)
      setQuote(quotes[randomNum])
    }
  
    const handleInputChange = (event) => {
      setNewQuote(event.target.value)
    } 
  
    const addQuote = () => {
      if(newQuote.trim() !== "") {
        setQuotes([...quotes, newQuote])
        setNewQuote('')
      } else {
        alert('Please enter a quote')
      }
    }
  
    return (
      <div>
        <h2 placeholder="Click the button for a random quote">{quote}</h2>
        <button className = "btn btn-primary" onClick={handleClick}>Generate Random Quote</button>
        <br/>
        <input className = "col-sm-8 my-3" onChange={handleInputChange} value = {newQuote}/>
        <br/>
        <button className = "btn btn-primary" onClick = {addQuote}>Add Quote</button>
      </div>
      
    );
}

export default RandomQuote