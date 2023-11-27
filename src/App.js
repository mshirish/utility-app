import "./App.css";
import { useState } from "react";
import Calculator from "./Projects/Calculator";
import Navbar from "./Navbar";
import {Route, Routes} from 'react-router-dom';
import HomePage from "./Projects/HomePage";
import BMI from "./Projects/BMI";
import TodoList from './Projects/TodoList';
import Notes from "./Projects/Notes";
import TextUtil from "./Projects/TextUtil";


function App() {
  
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#2B2730'
    } else {
      setMode('light')
      document.body.style.backgroundColor = '#F6F4EB'
    }
  }
  

  return (
    <>
    <Navbar mode = {mode} toggleMode = {toggleMode}/>
    <Routes>
      <Route path = "/" element = {<HomePage />} />
      <Route path = "/bmicalculator" element = {<BMI mode = {mode}/>} />
      <Route path = "/calculator" element = {<Calculator />} />
      <Route path = "/todolist" element = {<TodoList mode = {mode}/>} />
      <Route path = "/notes" element = {<Notes mode = {mode}/>} />
      <Route path = "/textutil" element = {<TextUtil mode = {mode}/>} />
    </Routes>
    </>
  );
}

export default App;
