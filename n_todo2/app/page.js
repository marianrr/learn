"use client"

import { useState } from "react"
import { revalidatePath } from "next/cache"


let notes1 = ["one", "two", "three", "four"]

const Page = () => {
    const [notes, setNotes] = useState(notes1)

    const submit1 = (e) => {
        e.preventDefault()
        const note = input1.value
        console.log(note)

        const lol = [...notes]
        lol.push(note)
        setNotes(lol)
        input1.value = ""
        //revalidatePath("/")

    }

    const delete1 = (id) => {

        let notes2 = notes.filter(note =>  !note.includes(id)  )
        console.log(notes2)
        setNotes(notes2)
    } 


    const showNotes = () => {
        return notes.map(note => {

            return (<li key={note}>{note}
                <span className="material-symbols-outlined">
                    edit_note
                </span>
                <span className="material-symbols-outlined" onClick={() => delete1(note)}>
                    delete
                </span>
            </li>)
        })
    }





    return (
        <>
            <p>Welcome to Home page!</p>
            <form onSubmit={submit1} name="form1" id="form1">
                <label htmlFor="input1">Insert new note</label>
                <br />
                <br />
                <input type="text" name="input1" id="input1" />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <ol>{showNotes()}</ol>


        </>
    )
}

export default Page