import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter]= useState(15) // react uses state , counter is variable, setCountner is function, useState(15) 15 here is initial value of counter variable, it could be anything
  // react uses function to update state, everytime new state is given when there is a change
  const addValue = () => {
    console.log(counter)
    setCounter(counter+1)
  }

  const removeValue =()=>{
    console.log(counter)
    const newValue = counter-1
    setCounter(newValue)
  }

  return (
    <>
    <h1> React course with Sahil {counter} </h1>
    <h2> Counter Value : {counter}</h2>
    <button onClick={addValue}> Add Value </button>
    <button onClick={removeValue}>Remove Value</button>
    <p>Footer: {counter}</p>

    </>
  )
}

export default App
