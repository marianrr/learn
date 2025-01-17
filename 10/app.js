const users = {
    name: "Marian",
    lastname: "Gio",
    age: 22,
    location: "Romania"
}

const oe = Object.entries(users)
console.log(oe)
console.table(oe)

const people = [
    ['name', 'Marian'],
    ['lastname', 'Gio'],
    ['age', 22],
    ['location', 'Romania']
]


const people2 = Object.fromEntries(people)

console.log(people2)
console.table(people2)