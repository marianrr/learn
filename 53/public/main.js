


const submit1 = async (event) => {
    event.preventDefault()
    let city = window.input1.value
    console.log(city)

    const data1 = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
    const data2 = await data1.json()
    console.log(data2.results[0])
    let lat = data2.results[0].latitude
    let long = data2.results[0].longitude

    console.log(lat, long)


    const data3 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max,temperature_2m_min&hourly=temperature_2m`)
    const data4 = await data3.json()
    const data5 = data4.daily.temperature_2m_max[0]
    console.log("Temperature is: ", data5)
    window.input1.value = ""
    window.weather.textContent = `Temperature in ${city} is ${data5}.`



}
