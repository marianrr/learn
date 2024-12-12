import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


const lunca = (formData) => {
  console.log("Inputul este: ", formData.get("input1"))
}


  return (
    <>
      <form action={lunca}>
        <label htmlFor="input1"></label>
        <input type="text" name="input1" />
        <input type="submit" />
      </form>
    </>
  )
}

export default App
