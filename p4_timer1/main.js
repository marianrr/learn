const timer = document.getElementsByClassName("container")[0]
console.log(timer)
let minutes = 1
let seconds = 3


const clock1 = () => {
    sto
    const kk = new Audio("drum6.mp3")
    kk.play()

}

const afis = () => {

    seconds--
    
    if (seconds === 0 && minutes > 0) {
        minutes--
        seconds = 2
    }
    timer.textContent = `${minutes}: ${seconds}`

    if (minutes === 0 && seconds === 0) {
        const ki = new Audio("drum6.mp3")
        ki.play()
        console.log("Time's up!")
        timer.textContent = "Time's up!"
        clearInterval(sto)
    }

}
let sto = setInterval(afis, 1000)

clock1()

document.body.addEventListener("click", () => {
    const kk = new Audio("drum6.mp3")
    kk.play()
})