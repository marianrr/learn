const showClock = () => {
    const clock2 = setInterval(() => {
        const clock3 = new Date()
        let seconds = clock3.getSeconds()
        let minutes = clock3.getMinutes()
        let hours = clock3.getHours()

        if (seconds < 10) { seconds = `0${seconds}` }
        if (minutes < 10) { minutes = `0${minutes}` }
        if (hours < 10) { hours = `0${hours}` }

        const date2 = `${hours} : ${minutes} : ${seconds}`
        window.container.textContent = date2
        console.log("Time is: ", date2)
    }, 1000)
}

showClock()