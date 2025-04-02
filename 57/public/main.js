const submit1 = event => {
    event.preventDefault()
    let timer1 = window.input1.value
    showTime(timer1)
    window.input1.value = ""

}

const showTime = time1 => {
    let time4 = setInterval(() => {
        let minutes = parseInt(time1 / 60)
        let seconds = time1 - minutes * 60
        if (seconds === 0 && minutes === 0) {
            window.timer.textContent = `Time expired!`
            clearInterval(time4)
            return
        }
        if (seconds < 10) { seconds = `0${seconds}` }
        if (minutes < 10) { minutes = `0${minutes}` }
       
        window.timer.textContent = `${minutes} : ${seconds}`
        --time1

    },1000)

}