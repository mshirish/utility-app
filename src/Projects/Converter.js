import React, {useState} from 'react'

const Converter = (props) => {
  
    const [ft, setFt] = useState(null)
    const [inch, setInch] = useState(null)
    const [meter, setMeter] = useState(null)
    
    const handleFtChange = (event) => {
      setFt(event.target.value)
    }

    const handleInchChange = (event) => {
      setInch(event.target.value)
    }

    const handleClick = () => {
      let ftToMeter = ft*0.3048;
      let inchToMeter = inch*0.0254;
      let mtr = ftToMeter+inchToMeter

      setMeter(mtr)
    } 
  
    return (
    <div className={`text-center text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <h1>CONVERTER</h1>
        <input placeholder="Feet" onChange = {handleFtChange} value = {ft}/>
        <input placeholder="Inches" onChange = {handleInchChange} value = {inch}/>
        <br/>
        <br/>
        <button className = "btn btn-primary" onClick = {handleClick}>Convert to Meters</button>
        <br/>
        <br/>
        <h2>Your height in Meters is {meter}</h2>
    </div>
  )
}

export default Converter