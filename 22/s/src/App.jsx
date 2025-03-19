import './App.css'
import { useState, useEffect, useRef } from "react"


function App() {

  const [count, setCount] = useState(0)
  const ref = useRef()

  useEffect(() => {
    ref.current = setInterval(() => {

      console.log("din useEffect")
      setCount(c => c + 1)
    }, 1000)
    return () => clearInterval(ref.current)
  }, [count])

  useEffect(() => {
    if (count === 5) {
      console.log("Este egal cu 5")
      clearInterval(ref.current)
    }
  })


  return (
    <>
      <p>{count}</p>

    </>
  )
}

export default App
