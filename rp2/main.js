const clock1 = document.getElementById("clock")

const so = setInterval(() => {
    let date1 = new Date()
    console.log(date1.getHours(), date1.getMinutes(), date1.getSeconds())
    let date2 = `${date1.getHours()} : ${date1.getMinutes()} : ${date1.getSeconds()}`
    clock1.textContent = date2



}, 1000)

