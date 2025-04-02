let time1 = window.timer

const change1 = event => {
    console.log(event.target.value)
    window.input1 = event.target.value

}

const click1 = event => {
    let num = Number(window.input1)
    console.log("Num este: ", num)
    timer2(num)
    document.getElementById('input1').value = ""
}



const timer2 = (num) => {
   



    const timer4 = setInterval(() => {
        let minutes = parseInt(num / 60)
        let seconds = num - minutes * 60
        if (seconds === 0 && minutes === 0) {
            time1.textContent = "Time expired!"
            clearInterval(timer4)
            return
        }
        if (seconds < 10) { seconds = `0${seconds}` }
        if (minutes < 10) { minutes = `0${minutes}` }

        time1.textContent = `${minutes} : ${seconds}`

        --num
    }, 1000)


}








