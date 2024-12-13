// import Image from "next/image";
import styles from "./page.module.css";
import { revalidatePath } from 'next/cache'

let notes = []
let i = 0
export default function Home() {

  const kikila = async (formData) => {
    "use server"


    const note = await formData.get("input1")
    console.log(note)
    notes.push(note)
    revalidatePath("/")
  }




  const gigi2 = () => {
    return notes.map(note => (<li key={i++}>{note}</li>))
  }

  return (
    <div className={styles.page}>


      <p>kikila new new jiu</p>
      <form action={kikila} name="form1">
        <input type="text" name="input1" id="input1" />
        <input type="submit" value="Submit" />






      </form>
      <p>Notes are:</p>
      <ul>{gigi2()}</ul>









    </div>
  );
}
