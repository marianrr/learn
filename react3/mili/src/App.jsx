import { useState } from 'react'




function App() {
  const [note, setNote] = useState("")
  const [notes, setNotes] = useState([])
  let i = 0

  const change1 = (e) => {
    setNote(e.target.value)
  }


  const click1 = () => {
    const notes2 = notes
    notes2.push(note)
    setNotes(notes2)
    console.log("The note is", note)
    console.log("Notes are: ", notes)
    setNote("")
  }

  function afisNotes() {
    return notes.map(note => (<li key={i++}>{note}</li>))
  }

  return (
    <>

      <input type="text" name="input1" id="input1" value={note} onChange={change1} />
      <input type="submit" onClick={click1} />
      <p>Notes are: </p>
      <ul>
        
        {afisNotes()}
      </ul>
    </>
  )
}

export default App
