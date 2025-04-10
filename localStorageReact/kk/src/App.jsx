import { useState, useEffect } from 'react'

function App() {
  const [note, setNote] = useState('kikila')
  const gg = 2222222222
  useEffect(() => {
    setNote('coco')
    localStorage.setItem('lol', JSON.stringify(note + 777))

  }, [note])

  useEffect(() => {
    const po = JSON.parse(localStorage.getItem('lol')) || 'zece'
    if (po) setNote(po)
  }, [])

  return (
    <>
      <p>Nota este: {note}</p>
      <p>Po este: {gg}</p>
    </>
  )
}

export default App
