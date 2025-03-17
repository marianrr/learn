import { useState } from 'react'


function App() {
  const [kikila, setKikila] = useState("Bayern Munchen")


  const coco = (e) => {
    setKikila("kikila")
  }

  const oo = (e) => {
    setKikila("Bayern")
  }

  return (
    <>
      <p>Dj guga la felipa</p>
      <p id="lol" onMouseOver={coco} onMouseOut={oo}>{kikila}</p>
    </>
  )
}

export default App
