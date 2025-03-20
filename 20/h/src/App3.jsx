import { useState, useEffect, useRef } from "react"


function App() {

  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const ref = useRef()

  const click1 = () => {
    setCount(lo => lo + 1)
  }


  useEffect(() => {
    ref.current = setInterval(() => {
      console.log("hau hau bau bau")
      setCount2(f => f + 1)

    }, 1000)

    return () => {
      clearInterval(ref.current)
    }

  })


  useEffect(() => {
    if (count2 === 5) {
      clearInterval(ref.current)
      console.log("kikila")
    }
  })


  return (
    <>


      <p>kikila</p>
      <button onClick={click1}>click me</button>
      <p>{count}</p>
      <p>{count2}</p>

    </>

  )




}



export default App