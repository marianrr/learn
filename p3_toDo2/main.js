let arr = [
    { name: "eu", id: 1 },
    { name: "tu", id: 2 },
    { name: "ei", id: 3 },
    { name: "noi", id: 4 },
    { name: "voi", id: 5 },
]

const a = arr.find(elem => elem.id === 1)
console.log(a)
a.name = "2222222222222"
console.log(a)
console.log("Arr este: ", arr)