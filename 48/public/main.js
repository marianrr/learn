console.log('This is working!')

const click1 = num => {
    console.log(num)
    const aud = new Audio(`./sounds/drum${num}.mp3`)
    aud.play()
}