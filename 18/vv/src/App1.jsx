import { useMemo, useState } from "react"



const App1 = () => {
    const [lol, setLol] = useState("")
    const mee = useMemo(() => sum(), [lol])




    return (
        <>
            <p>Dj Guga...</p>


            <p>{mee}</p>
        </>
    )
}


const sum = () => {
    return 23456
}



export default App1