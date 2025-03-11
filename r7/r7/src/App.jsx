import DjGuga from "./DjGuga.jsx"

import Coconitos from "./Coconitos.jsx"
function App() {
  let sos = 0
  const lol = arr => JSON.stringify(arr)
  const eu = { name: "dj one", age: 22 }
  const soto = { name: "Marian", age: 18 }

  const click1 = (ki) => {
    alert("This is Sparta!")
    console.log("Welcome!", sos)
    console.log(ki)

    sos++
  }
  return (
    <>

      <p>... Dj Guga la Felipa...{10 + 33}......{lol({ name: "unu", doi: "two" })}</p>
      <DjGuga user={eu} />
      <Coconitos soto={soto} />
      <button onClick={() => click1("milishoor")}>Click</button>
    </>
  )
}

export default App
