import { useState, useRef } from 'react'
import './App.css'

let notes2 = ["unu", "doi", "trei", "patru"]
let i = 1
let par = "true"
let note3 = ""




function App() {
  const [notes, setNotes] = useState(notes2)
  // const ref = useRef(null)

  const delete1 = (e) => {
    console.log("for delete")
    const par = e.target.parentElement
    const par2 = e.target.parentElement.firstChild.textContent
    console.log(e.target.parentElement.firstChild.textContent)
    //par.remove()
    let lo = [...notes]
    lo = lo.filter(note => note !== par2)
    setNotes(lo)

    // ref.current.parentElement.remove()
    // let mi = [...notes]
    // const ki = e.target.textContent
    // console.log(ki)
    // const lol = mi.filter(note => note !== ki)
    // setNotes(lol)

  }

  const edit1 = (e) => {
    par = "false"
    console.log("am activat tuta...")
    const par3 = e.target.parentElement.firstChild.textContent
    console.log(par3)
    input1.value = par3
    note3 = par3
  }


  const submit1 = (formData) => {
    if (par === "true") {
      const note = formData.get("input1")
      console.log(note)
      const ror = [...notes]
      ror.push(note)
      console.log(ror)
      setNotes(ror)
      console.log(notes)
    }
    else {

      const note = formData.get("input1")
      console.log(note)
      let ror = [...notes]
      let so = ror.map(note1 => {
        if (note1.includes(note3)) note1 = note
        return note1
      })

      setNotes(so)
      console.log(notes)

      note3 = ""
      par = "true"
    }
  }

  const cozo = () => {
    return notes.map(note => <li key={i++} >{note}<span className="material-symbols-outlined" onClick={edit1}>
      edit_square
    </span><span className="material-symbols-outlined" onClick={delete1}>
        delete
      </span></li>)
  }



  return (
    <>
      <form action={submit1}>
        <fieldset>
          <legend>ToDo app</legend>
          <label htmlFor="input1">Insert a note</label>
          <input type="text" name="input1" id="input1" />
          <input type="submit" value="Submit" />

        </fieldset>
      </form>


      <ol>{cozo()}</ol>
    </>
  )
}

export default App


