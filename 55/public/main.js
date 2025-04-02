
const click1 = num => {
    const aud = new Audio(`./sounds/drum${num}.mp3`)
    console.log(num)
    aud.play()
}