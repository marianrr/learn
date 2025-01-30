
console.log("...welcome...")

const seconds = document.querySelector(".sec")
const minutes = document.querySelector(".min")
const hours = document.querySelector(".hou")

const lol = () => {

    const date1 = new Date()
    const sec = Number(date1.getSeconds())
    const min = Number(date1.getMinutes())
    const hrs = Number(date1.getHours())
    console.log(sec, min, hrs)
    seconds.style.transform = `rotate(${sec * 6 + 90}deg)`
    minutes.style.transform = `rotate(${min * 6 + 90}deg)`
    hours.style.transform = `rotate(${hrs * 30 + 90}deg)`

}

setInterval(lol, 1000)