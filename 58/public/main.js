const submit1 = async event => {

    event.preventDefault()
    let city = window.input1.value
    const data1 = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
    const data2 = await data1.json()
    console.log(data2.results[0])
    let lo = data2.results[0]
    let lat = data2.results[0].latitude
    let long = data2.results[0].longitude
    console.log(lat, long)
    const data3 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m`)
    const data4 = await data3.json()
    let weather2 = data4.current.temperature_2m
    console.log(weather2)
    window.weather.textContent = "The temperature is " + data4.current.temperature_2m




}