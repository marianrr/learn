const clock1 = () => {

    const time2 = setInterval(() => {

        let time = new Date()
        let hours = time.getHours()
        let minutes = time.getMinutes()
        let seconds = time.getSeconds()
        if (seconds < 10) { seconds = `0${seconds}` }
        if (minutes < 10) { minutes = `0${minutes}` }
        if (hours < 10)   { hours = `0${hours}` }
        window.clock.textContent = `${hours} : ${minutes} : ${seconds}`



    }, 1000)

}

clock1()