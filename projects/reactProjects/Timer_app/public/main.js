let timer2 = 15 * 60

const timer1 = setInterval(() => {
    let minutes = parseInt(timer2 / 60)
    let seconds = timer2 - minutes * 60
    if (timer2 === 0) {
        window.timer.textContent = "Time expired"
        clearInterval(timer1)
        return
    }

    if (seconds < 10) seconds = `0${seconds}`
    if (minutes < 10) minutes = `0${minutes}`

    window.timer.textContent = `${minutes} : ${seconds}`
    --timer2


}, 1000)



const submit1 = event => {
    event.preventDefault()
    clearInterval(timer1)
    let timer3 = Number(window.input1.value)
    const timer5 = setInterval(() => {
        let minutes = parseInt(timer3 / 60)
        let seconds = timer3 - minutes * 60
        if (timer3 === 0) {
            window.timer.textContent = "Time expired"
            clearInterval(timer5)
            return
        }

        if (seconds < 10) seconds = `0${seconds}`
        if (minutes < 10) minutes = `0${minutes}`

        window.timer.textContent = `${minutes} : ${seconds}`
        --timer3


    }, 1000)
    window.input1.value = ""
}