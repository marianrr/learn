const so = setInterval(() => {
    let clock = new Date()
    let hours = clock.getHours()
    let minutes = clock.getMinutes()
    let seconds = clock.getSeconds()
    window.clock.textContent = `${hours} : ${minutes} : ${seconds}`


}, 1000)