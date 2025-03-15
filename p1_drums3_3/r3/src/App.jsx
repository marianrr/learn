import { useState } from "react"

function App() {
  const [btn1, setBtn1] = useState("")
  const [btn2, setBtn2] = useState("")
  const [btn3, setBtn3] = useState("")
  const [btn4, setBtn4] = useState("")
  const [btn5, setBtn5] = useState("")
  const [btn6, setBtn6] = useState("")
  const [btn7, setBtn7] = useState("")


  const click1 = (event) => {
    let cc = event.target.name.at(-1)
    console.log(cc)
    const btn11 = new Audio(`sounds/drum${cc}.mp3`)
    btn11.play()
  }

  return (
    <>
      <div className="container">
        <input type="submit" name="btn1" value="1" onClick={(event) => click1(event)} />
        <input type="submit" name="btn2" value="2" onClick={(event) => click1(event)} />
        <input type="submit" name="btn3" value="3" onClick={(event) => click1(event)} />
        <input type="submit" name="btn4" value="4" onClick={(event) => click1(event)} />
        <input type="submit" name="btn5" value="5" onClick={(event) => click1(event)} />
        <input type="submit" name="btn6" value="6" onClick={(event) => click1(event)} />
        <input type="submit" name="btn7" value="7" onClick={(event) => click1(event)} />
      </div>

    </>
  )
}

export default App
