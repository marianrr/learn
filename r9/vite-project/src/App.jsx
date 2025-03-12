import { useState } from "react"

function App() {
  const [name, setName] = useState("")
  const [name2, setName2] = useState("")
  const [form2, setForm2] = useState("")
  const [sl, setSl] = useState("Fiat")
  const [txt, setTxt] = useState("Dj Guga la Felipa")

  const cha = e => {
    setName(e.target.value)
    console.log(name)
  }
  const cha2 = e => {
    setName2(e.target.value)
    console.log(name2)
  }
  const sub = e => {
    e.preventDefault()
    setForm2(e.target.value)
  }
  const handleChange = e => {
    setTxt(e.target.value)
  }

  const handleChange2 = e => {
    setSl(e.target.value)
  }


  return (
    <>
      <p>This is first page.</p>
      <br />

      <label htmlFor="in1">
        <input type="text" name="in1" id="in1" value={name} onChange={cha}></input>
      </label>
      <p>{name}</p>


      <form id="form1" name="form1" value={form2} onSubmit={sub}>
        <input type="text" name="in2" id="in2" value={name2} onChange={cha2}>
        </input>
        <br />
        <input type="submit" value="Click me!"></input>
      </form>
      <p>{name2}</p>

      <form>
        <textarea value={txt} onChange={handleChange}></textarea>
      </form>

      <p>{txt}</p>


      <form>
        <select value={sl} onChange={handleChange2}>
          <option value="Ford" >Ford</option>
          <option value="Volvo" >Volvo</option>
          <option value="Fiat" >Fiat</option>
        </select>
      </form>

      <p>{sl}</p>

    </>
  )
}

export default App
