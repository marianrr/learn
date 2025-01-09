import { revalidatePath } from "next/cache"

const notes = ["one", "two", "three"]

const Page = () => {

    const submit1 = async (formData) => {
        "use server"
        const note = formData.get("input1")
        notes.push(note)
        console.log("Notes are: ", notes)
        revalidatePath("/")

    }


    const showNotes = () => {
        return notes.map(note => {
            return (<li key={note}>{note}</li>)
        })
    }

    return (
        <>
            <span className="material-symbols-outlined">
                edit_note
            </span>
            <span className="material-symbols-outlined">
                delete
            </span>
            <p>Welcome to Home page!</p>

            <form action={submit1} name="form1">
                <br />
                <br />
                <label htmlFor="input1">Insert note</label>
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