import "./index.css"
import { revalidatePath } from "next/cache"


let notes = []
let i = 0
export default function Page() {

    const lol = async (formData) => {
        "use server"
        const note = await formData.get("mili")
        console.log("The note is ", note)
        notes.push(note)
        console.log("The notes are:  ", notes)
        revalidatePath("/")

    }


    const notes2 = () => {
        return notes.map(note => (<li key={i++}>{note}</li>))
    }

    return (
        <div>
            <h1>Dj guga la felipa</h1>
            <h3>kikila nwe...</h3>

            <form action={lol} name="form1">


                <label htmlFor="mili">Insert a note</label>
                <br />
                <input type="text" name="mili" id="mili" />
                <br />
                <input type="submit" value="Click me" />

            </form>

            <ul>Notes are:{notes2()}</ul>
            <div className="miau">miau hau bau</div>

        </div>

    )
}