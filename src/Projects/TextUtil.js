import React, { useState } from 'react'

const TextUtil = (props) => {
  
const [text, setText] = useState('') 
let [find, setFind] = useState('')
const [replace, setReplace] = useState('') 
  
const handleTextChange = (event) => {
    setText(event.target.value)
}

const handleUpper = () => {
    let upperCase = text.toUpperCase()
    setText(upperCase)
}

const handleLower = () => {
    let lowerCase = text.toLowerCase()
    setText(lowerCase)
}

const handleFindChange = (event) => {
    setFind(event.target.value)
}

const handleReplaceChange = (event) => {
    setReplace(event.target.value)
}

const handleFandRClick = () => {
    let textArr = text.split(' ')
    for (let i = 0; i< textArr.length; i++) {
        if(textArr[i] === find) {
            textArr[i] = replace
        } else if (!textArr.includes(find)) {
            alert('word does not exist in text')
            break
        } 
    }
    setText(textArr.join(' '))
}

const handleClearClick = () => {
    setText('')
}


    
    return (
    <div>
        <div className="m-3">
        <label for="exampleFormControlTextarea1" className={`form-label text-${props.mode === 'light'? 'dark' : 'light'}`}>Enter your text here: </label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange = {handleTextChange}></textarea>
        </div>
        <div className="mx-3">
            <button className="btn btn-primary mx-2" onClick = {handleUpper}>Upper Case</button>
            <button className="btn btn-primary mx-2" onClick = {handleLower}>Lower Case</button>
            <input value = {find} onChange = {handleFindChange}/>
            <input value = {replace} onChange = {handleReplaceChange}/>
            <button className="btn btn-primary mx-2" onClick = {handleFandRClick}>Find and Replace</button>
            <button className="btn btn-primary mx-2" onClick = {handleClearClick}>Clear</button>
            
        </div>
    </div>
  )
}

export default TextUtil
