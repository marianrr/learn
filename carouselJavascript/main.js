
// const so = setInterval(() => {
//     let num = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
//     window.container2.innerHTML = `<img src="./images/${num}.png">`
//     console.log("oau")
// }, 1000)



const minCeiled = Math.ceil(1);
const maxFloored = Math.floor(5)


const click1 = (event) => {
    let num = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
    window.container2.innerHTML = `<img src="./images/${num}.png">`
    console.log("oau")
}