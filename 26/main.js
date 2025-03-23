const clock2 = () => {

    const lo = setInterval(() => {
        let time1 = new Date()
        let hours = time1.getHours()
        let minutes = time1.getMinutes()
        let seconds = time1.getSeconds()
        window.clock.textContent = `${hours} : ${minutes} : ${seconds}`
    }, 1000)

}

clock2()