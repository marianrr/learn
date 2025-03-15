"use client"

export default function Page() {

    const click1 = (event) => {
        console.log(event.target.name)
        let ff = event.target.name
        let ss = ff.at(-1)
        console.log(ss)
        const aud = new Audio(`/sounds/drum${ss}.mp3`)
        aud.play()

    }





    return (
        <>
            <div className="container">
                <input type="submit" name="btn1" id="btn1" value="btn1" onClick={click1} />
                <input type="submit" name="btn2" id="btn2" value="btn2" onClick={click1} />
                <input type="submit" name="btn3" id="btn3" value="btn3" onClick={click1} />
                <input type="submit" name="btn4" id="btn4" value="btn4" onClick={click1} />
                <input type="submit" name="btn5" id="btn5" value="btn5" onClick={click1} />
                <input type="submit" name="btn6" id="btn6" value="btn6" onClick={click1} />
                <input type="submit" name="btn7" id="btn7" value="btn7" onClick={click1} />
            </div>








        </>
    )
}