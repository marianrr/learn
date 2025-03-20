import { useState, useEffect, useRef } from "react"


function App() {

  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  

  const click1 = () => {
    setCount(lo => lo + 1)
  }


  useEffect(() => {
    const dd = setInterval(() => {
      // Folosește actualizare funcțională pentru a accesa starea curentă
      setCount2((prevCount) => {
        if (prevCount === 5) {
          console.log("miau miau, hau hau!");
          return 0;
        }
        return prevCount + 1;
      });
    }, 1000);
  
    return () => clearInterval(dd);
  }, []); // [] = rulează o singură dată la montare


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