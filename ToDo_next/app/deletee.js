"use client"
import delete1 from "./delete1.js"


const Deletee = ({ notes, id }) => {
    console.log("Notele sunt: ", notes)
    console.log("Id-ul este: : ", id)
    return (
        <span className="material-symbols-outlined" onClick={() => delete1(notes, id)}>
            delete
        </span>
    )
}

export default Deletee