import { useState,useCallback, useEffect } from 'react'


import './App.css'

function App() {
  const [lengh, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [specialChar, setSpecialChar] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(specialChar) str += "+_)(*&^%$#@!~`}{[]"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    
    setPassword(pass)

  }, [lengh, numberAllowed, specialChar, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [lengh, numberAllowed, specialChar, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-grey-800">
        <h1 className='mb-5'>Password Generator</h1>
        
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        readOnly
        />

        <button className="outline-none bg-blue-700 text-white px-3  py-0.5 shrink-0">Copy</button>

        <div className="flex text-sm gap-x-2">
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={lengh}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label> Length: {lengh}</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((prev) => !prev);
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox"
            defaultChecked={specialChar}
            id='charInput'
            onChange={()=>{
              setSpecialChar((prev) => !prev);
            }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
