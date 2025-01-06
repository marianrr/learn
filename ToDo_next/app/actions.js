"use server"
import Deletee from "./deletee.js"

const submit1 = (formData) => {
    const note = formData.get("input1")
    console.log(note)
}

const showNotes = (notes) => {
    return notes.map(note => {
        const key1 = note
        return (<li key={note}>{note}<span className="material-symbols-outlined">
            border_color
        </span>
            <Deletee notes={notes} id={note} />    </li>)
    })
}


export {
    submit1,
    showNotes
}