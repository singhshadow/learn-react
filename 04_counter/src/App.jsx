import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
// let counter = 5
const addValue = () => {
  if(counter<20)
  setCounter(counter+1)
  else
  alert("Maximum counter value reached!!!!....")
}
const rmvValue = () => {
  if(counter==0)
    alert("Minimum counter value reached!!!!....")
    else
    setCounter(counter-1)
  
}
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick = {addValue}>Add Value {counter}</button>
      <br />
      <button onClick = {rmvValue}>Rmv Value {counter}</button>
      <p>Footer: {counter}</p>

    </>
  )
}

export default App
