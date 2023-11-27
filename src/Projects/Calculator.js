import React, { useState } from 'react';



const Calculator = () => {
    
    const [input, setInput] = useState('')
    const [ans, setAns] = useState('')

    const handleClick = (val) => {
        if (val === '=') {
            try {
                setAns(eval(input).toString())
            } catch (e) {
                setAns('Error')
            }
        } else if (val === 'C') {
            setAns('')
            setInput('')
        } else {
            setInput(input+val)
        }
    }

return (

        <div className="container mt-5">
        <div className="calculator">
          <h2 className="input bg-light p-2 border border-dark">{input}</h2>
          <h2 className="result bg-light p-2 mb-4 border border-dark">{ans}</h2>
          <div className="buttons">
            <div className="row">
              <button className="col-3 btn btn-outline-primary" onClick={() => handleClick('1')}>
                1
              </button>
              <button className="col-3 btn btn-outline-primary" onClick={() => handleClick('2')}>
                2
              </button>
              <button className="col-3 btn btn-outline-primary" onClick={() => handleClick('3')}>
                3
              </button>
              <button className="col-3 btn btn-outline-secondary" onClick={() => handleClick('/')}>
                /
              </button>
            </div>
            <div className="row">
              <button className="col-3 btn btn-outline-primary" onClick={() => handleClick('4')}>
                4
              </button>
              <button className="col-3 btn btn-outline-primary" onClick={() => handleClick('5')}>
                5
              </button>
              <button className="col-3 btn btn-outline-primary" onClick={() => handleClick('6')}>
                6
              </button>
              <button className="col-3 btn btn-outline-secondary" onClick={() => handleClick('*')}>
                *
              </button>
            </div>
            <div className="row">
              <button className="col-3 btn btn-outline-primary" onClick={() => handleClick('7')}>
                7
              </button>
              <button className="col-3 btn btn-outline-primary" onClick={() => handleClick('7')}>
                8
              </button>
              <button className="col-3 btn btn-outline-primary" onClick={() => handleClick('9')}>
                9
              </button>
              <button className="col-3 btn btn-outline-secondary" onClick={() => handleClick('-')}>
                -
              </button>
            </div>
            <div className="row">
              <button className="col-3 btn btn-outline-primary" onClick={() => handleClick('C')}>
                C
              </button>
              <button className="col-3 btn btn-outline-primary" onClick={() => handleClick('0')}>
                0
              </button>
              <button className="col-3 btn btn-outline-secondary" onClick={() => handleClick('=')}>
                =
              </button>
              <button className="col-3 btn btn-outline-success" onClick={() => handleClick('+')}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Calculator;