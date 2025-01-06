
import { submit1, showNotes } from "./actions.js"
import delete1 from "./delete1.js"



const Page = () => {

    const notes = ["unu", "doi", "trei", "patru"]





    return (
        <div>
            <p>dj guga la felipa</p>
            <span className="material-symbols-outlined">
                border_color
            </span>
            <span className="material-symbols-outlined">
                delete
            </span>
            <form action={submit1}>
                <label htmlFor="input1">Write a note</label>
                <input type="text" name="input1" id="input1" />
                <input type="submit" value="Submit" />
            </form>

            <ul>{showNotes(notes)}</ul>

        </div>
    )
}

export default Page