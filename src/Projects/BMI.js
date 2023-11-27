import React, { useState } from 'react'
import Converter from './Converter'

const BMI = (props) => {
    
    const [bmi, setBmi] = useState(0)
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [msg, setMsg] = useState('')
    
    const handleHeightChange = (event) => {
        setHeight(event.target.value)
    }

    const handleWeightChange = (event) => {
        setWeight(event.target.value)
    }
    
    const handleClick = () =>{
        let body = (weight/(height*height))
        setBmi(Math.round(body))
        if (body<19) {
            setMsg('you are Underweight')
        } else if (body>=19 && body<=25) {
            setMsg('you are Healthy')
        } else if (body>=26 && body<=30) {
            setMsg('you are slightly Overweight')
        } else if (body>=31 && body<=35) {
            setMsg('you are fat')
        } else {
            setMsg('you are obese')
        }
    }



    return (
    <div className = 'container text-center'>
        <Converter mode = {props.mode}/>
        <h1 className = {`mt-5 text-${props.mode === 'light' ? 'dark' : 'light'}`} >BMI CALCULATOR</h1>
        <div className = "mx-2">
            <input placeholder='Enter height in Meters' onChange = {handleHeightChange} value = {height}/>
            <br/>
            <br/>
            <input placeholder='Enter weight in Kgs' onChange = {handleWeightChange} value = {weight}/>
            <br/>
            <br/>
            <button className = "btn btn-primary" onClick = {handleClick}>Enter</button>
        </div>
        <div className = {`m-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <h2>Your Body Mass index is {bmi} which means {msg}</h2>
        </div>
    </div>
  )
}

export default BMI