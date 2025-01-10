import { notes } from "./app/page.js"


const showNotes = (notes) => {
    return notes.map(note => {
        return (<li key={note}>{note}
            <span className="material-symbols-outlined">
                edit_note
            </span>
            <span className="material-symbols-outlined">
                delete
            </span>
        </li>)
    })
}

export default showNotes