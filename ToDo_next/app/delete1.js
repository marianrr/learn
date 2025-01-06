"use client"


const delete1 = (notes, id) => {
    console.log("Notele sunt: ", notes)
    console.log("Id-ul este: : ", id)
    notes = notes.filter(note => note !== id)
}

export default delete1