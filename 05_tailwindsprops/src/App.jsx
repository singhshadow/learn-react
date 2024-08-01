import './App.css'
import Card from './components/Card'

function App() {
  // const myObj = {
  //   username: "akshat",
  //   age: 22
  // }
  // let newArr = [1,2,3,4]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind test....</h1>
      
      <Card userName="chaiaurcode" btnText="click me"/>
      <Card userName="akshat" btnText="visit me"/>
    
    </>
  )
}

export default App
