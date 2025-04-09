

let timer1 = setInterval(() => {

    let time2 = new Date()
    let hours = time2.getHours()
    let minutes = time2.getMinutes()
    let seconds = time2.getSeconds()

    if (hours < 10) hours = `0${hours}`
    if (minutes < 10) minutes = `0${minutes}`
    if (seconds < 10) seconds = `0${seconds}`

    window.timer.textContent = `${hours} : ${minutes} :${seconds}`


}, 1000)