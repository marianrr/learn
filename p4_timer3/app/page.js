"use client"
import { useState, useEffect } from "react"


export default function Page() {

    const [seconds, setSeconds] = useState(3)
    const [minutes, setMinutes] = useState(3)


    useEffect(() => {


        const sto = setTimeout(afis, 1000)
        function afis() {
            setSeconds(seconds => seconds - 1)
            if (seconds === 0 && minutes > 0) {
                setMinutes(minutes => minutes - 1)
                setSeconds(3)
            }
            if (seconds === 0 && minutes === 0) {
                console.log("Time expired!")
                clearInterval(sto)
                setMinutes(0)
                setSeconds(0)
            }
        }
        return () => {
            clearInterval(sto)
        }

    }, [seconds, minutes])




    return (
        <>

            <div className="container">
                <p>{minutes} : {seconds}</p>
            </div>



        </>
    )
}