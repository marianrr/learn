

console.log(window.location.href)
const so = async () => {

    let data2 = await fetch('http://localhost:3000/miau')
    let data1 = await data2.json()
    console.log("datele sunt: ", data1)
}
so()