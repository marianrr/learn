import { useState, useEffect, useRef } from "react"

function App() {
  const [seconds, setSeconds] = useState(3)
  const [minutes, setMinutes] = useState(1)
  const [coco, setCoco] = useState("coco")
  const intervalRef = useRef()
  
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds > 0) {
          return prevSeconds - 1
        }

        // Când secundele ajung la 0
        setMinutes(prevMinutes => {
          if (prevMinutes > 0) {
            // Resetăm secundele la 59 când scadem un minut
            setSeconds(5)
            return prevMinutes - 1
          }
          return prevMinutes
        })

        // Oprim intervalul când timpul expiră
        if (minutes === 0 && seconds === 0) {
          clearInterval(intervalRef.current)
        }
        return 0
      })
    }, 1000)

    return () => clearInterval(intervalRef.current)
  }, []) // Empty dependency array = rulează doar la mount

  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      clearInterval(intervalRef.current)
      console.log("Time expired")
      setCoco("Time expired!")
    }
  }, [seconds, minutes, coco])

  return (
    <>
      <div className="container">
        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </div>
      <p style={{color:"red"}}>{coco}</p>

    </>
  )
}

export default App