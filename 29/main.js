
const so = async (lat, long) => {
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&current=temperature_2m`)
    const data = await res.json()
    console.log(data)
    window.wea.textContent = "temperatura este: " + `${data.current.temperature_2m}`

}



const ge = async () => {

    const city = window.input1.value
    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
    const data = await res.json()
    let lat = data.results[0].latitude
    let long = data.results[0].longitude
    console.log(lat, long)
    so(lat, long)
}

ge()
