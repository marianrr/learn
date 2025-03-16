import { useState } from "react"
let i = 0

function App() {
  let notes2 = [
    {
      name: "walk in the sun",
      id: ++i
    },
    {
      name: "read books",
      id: ++i
    },
    {
      name: "go outside",
      id: ++i
    },
    {
      name: "joke aside",
      id: ++i
    },
  ]
  const [note, setNote] = useState({name: "", id: ++i})
  const [notes, setNotes] = useState(notes2)


  const onSubmit1 = e => {
    e.preventDefault()
    const lo = [...notes]
    lo.push(note)
    setNotes(lo)
    console.log(notes)
    setNote({name: "", id: ++i})
  }

  const onClick1 = (e, key) => {
    console.log(key)
    let dd = [...notes]
    let rr = dd.find(elem => elem.id === key)

    rr.name = note.name
    rr.id = note.id
    console.log(rr)
    setNotes(dd)
    setNote("")

  }

  const odbc = (e, key) => {
    console.log("cheia este: ", key)
    console.log("i pressed dbl click!")
    let dd = [...notes]
    console.log(dd)
    dd = dd.filter(elem => elem.id !== key)
    console.log("DD este: ", dd)

    console.log(dd)
    setNotes(dd)
    afis()


  }

  const onChange1 = e => {
    const lol = { name: e.target.value, id: ++i }
    setNote(lol)
  }

  const afis = () => notes.map(elem => <li key={++i} onDoubleClick={(e) => odbc(e, elem.id)}
    onClick={(e) => onClick1(e, elem.id)} >{elem.name}</li>)



  return (
    <>

      <div id="container">

        <form onSubmit={onSubmit1} name="form1" id="form1">
          <label htmlFor="input1">Introdu nota</label>
          <br />
          <input type="text" name="input1" id="input1" value={note.name} onChange={onChange1} />
          <br />
          <input type="submit" name="submit1" id="submit1" placeholder="Submit" />
        </form>


        <p>{note.name}</p>

        <ul>
          {afis()}
        </ul>
      </div>
    </>
  )
}

export default App
