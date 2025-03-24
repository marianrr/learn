let clock = 60

const so = setInterval(() => {
    --clock
    let minutes = parseInt(clock / 60)
    let seconds = clock - minutes * 60
    if (minutes === 0 && seconds === 0) {
        clearInterval(so)
        window.timer.textContent = "Time expired!"
        return
    }
    window.timer.textContent = `${minutes} : ${seconds}`

}, 1000)