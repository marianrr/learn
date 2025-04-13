import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  const [clock, setClock] = useState('Clock')

  useEffect(() => {
    const so = setInterval(() => {
      let time = new Date()
      let hours = time.getHours()
      let minutes = time.getMinutes()
      let seconds = time.getSeconds()

      if (hours < 10) hours = `0${hours}`
      if (minutes < 10) minutes = `0${minutes}`
      if (seconds < 10) seconds = `0${seconds}`

      let time2 = `${hours} : ${minutes} : ${seconds}`
      setClock(time2)
    }, 1000)


  }, [clock])


  return (
    <>

      <div className="container">{clock}</div>

    </>
  )
}

export default App
