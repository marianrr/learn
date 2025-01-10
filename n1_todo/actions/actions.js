"use server"
import revalidatePath from "next/cache"
import {useState} from "react"

export let lol = ["one", "two", "three", "four", "five"]
const [notes, setNotes] = useState(lol)
export const submit1 = async (formData) => {

    const note = await formData.get("input1")
    console.log(note)
   

}

