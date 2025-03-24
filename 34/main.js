

const co = async (lat, long) => {
    let res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&current=temperature_2m`)
    let data = await res.json()
    console.log(data.current.temperature_2m)
    window.weather2.textContent = "Temperature is: " + `${data.current.temperature_2m}`
}

const submit1 = (e) => {
    e.preventDefault()
    const city = window.weather.value
    console.log(window.weather.value)
    so(city)
    window.weather.value = ""
}

const so = async (city) => {
    const lo = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
    const data = await lo.json()
    console.log(data.results[0])
    let lat = data.results[0].latitude
    let long = data.results[0].longitude
    console.log(lat, long)
    co(lat, long)
}