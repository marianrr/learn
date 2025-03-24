let clock = 120


const si = setInterval(() => {
    --clock
    let minutes = parseInt(clock / 60)
    let seconds = clock - minutes * 60

    if (clock === 0) {
        window.clock.textContent = "Time expired!"
        clearInterval(si)
        return
    }


    window.clock.textContent = `${minutes} : ${seconds}`


}, 1000)