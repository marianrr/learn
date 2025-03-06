class Person {
    #name
    #age
    static code = 'one two three'
    constructor(name, age, location) {
        this.#name = name
        this.#age = age
        this.location = location
    }

    display() {
        return `I am ${this.#name} and I have ${this.#age}. I live in ${this.location}.`
    }
}

const eu = new Person("Marian", 100, "Istanbul")
console.log(eu.display(), eu.name, eu.age)
console.log(Object.keys(eu))
console.log(Object.values(eu))
console.log(Person.code)
console.log(eu.code)