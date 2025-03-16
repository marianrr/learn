"use client"
import { useState } from "react"
let i = 1;


let notes2 = [
    { name: "one", id: ++i },
    { name: "two", id: ++i },
    { name: "three", id: ++i },
    { name: "four", id: ++i },
    { name: "five", id: ++i },
]
export default function Page() {

    const [text1, setText1] = useState("")
    const [notes, setNotes] = useState(notes2)


    const onChange1 = e => {
        setText1(e.target.value)
    }

    const onSubmit1 = e => {
        e.preventDefault()
        const arr1 = [...notes]
        arr1.push({ name: text1, id: ++i })
        setNotes(arr1)
    }

    const afis = () => notes.map(note => <li key={++i} onClick={(e) => onClick1(e, note.name)} tabIndex={0}>{note.name}</li>)

    const onClick1 = (e, val) => {
        const a = prompt("Cat este ceasul?")
        console.log(a)
        let note1 = notes.find(note => note.name === val)
        note1.name = a
        console.log(notes)
        let arr2 = [...notes]
        setNotes(arr2)

    }





    return (
        <>
            <div id="container">
                <form onSubmit={onSubmit1} name="form1" id="form1">
                    <label htmlFor="input1">Insert note here...</label>
                    <br />
                    <input type="text" name="input1" id="input1" value={text1} onChange={onChange1} />
                    <br />
                    <input type="submit" name="submit2" id="submit2" placeholder="Submit" />

                </form>
                <ul>
                    {afis()}
                </ul>

            </div>





        </>
    )
}