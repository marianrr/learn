"use client"

import { submit1 } from "../actions/actions.js"
import showNotes from "../showNotes.js"


const Page = () => {


    return (
        <div>
            <span className="material-symbols-outlined">
                edit_note
            </span>
            <span className="material-symbols-outlined">
                delete
            </span>
            <p>Welcome to Home page!</p>
            <form action={submit1} name="form1" id="form1">
                <label htmlFor="input1">Insert new note</label>
                <input type="text" name="input1" id="input1" />
                <input type="submit" value="Submit" />
            </form>
            <ol>{showNotes(notes)}</ol>
        </div>
    )
}

export default Page