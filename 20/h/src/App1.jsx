import { useState, useEffect, useRef } from "react"

function App() {
  const [count, setCount] = useState(0)
  const ref = useRef(0)
  const [dd, setDd] = useState(0)
  const [li, setLi] = useState("")


  const click1 = () => {
    setCount(ki => ki + 1)
  }

  const click2 = () => {
    setCount(0)
  }

  useEffect(() => {
    console.log("Render")
    const jj = setInterval(() => {
      setDd(ki => ki + 1)
    }, 1000)

    return () => {
      clearInterval(jj)
    }

  }, [])


  const onchange1 = (e, gg = "Soto") => {
    setLi(e.target.value)
    console.log(gg)
  }



  return (
    <>
      <button onClick={click1}>Click me</button>
      <button onClick={click2} id="lo">Reset</button>
      <p>I pressed {count} times.</p>
      <p>{dd}</p>
      <input type="text" onChange={onchange1} />
      <p>{li}</p>



    </>
  )
}

export default App
