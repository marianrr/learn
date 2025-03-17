import { useState, createContext, useContext } from "react"
import ReactDom from "react-dom/client"

const kikila = createContext()


function App() {
  const [user, setUser] = useState("Dj Guga la Felipa")






  return (
    <>

      <kikila.Provider value={user}>
        <h1>{`Hello ${user}`}</h1>

        <Lol />
      </kikila.Provider>










    </>
  )
}


const Lol = () => {
  const user = useContext(kikila)

  return (
    <>
      <h1>{`Hello ${user} again!`}</h1>
    </>
  )
}



export default App
