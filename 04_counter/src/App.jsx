
import './App.css'

function App() {
let counter = 5
const addValue = () => {
  counter++
  console.log("Clicked", counter);
  
  
}
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick = {addValue}>Add Value {counter}</button>
      <br />
      <button>Rmv Value {counter}</button>

      <p>Footer: {counter}</p>

    </>
  )
}

export default App
