const lo = async () => {
    const aa = await fetch("https://api.open-meteo.com/v1/forecast?latitude=47.75&longitude=26.6667&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
    const bb = await aa.json()
    console.log(bb)
    console.log(bb.current.temperature_2m)
    const temp = bb.current.temperature_2m
    const so = document.getElementsByClassName("container")[0]
    const du = document.createElement("p")
    du.textContent = "Temperatura este:   " + temp + " ."
    so.appendChild(du)

}

lo()