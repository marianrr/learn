class Name {
    start = "one"
    constructor(name, age, start) {
        this.name = name
        this.age = age
        this.start = start
    }
    show() {
        return "method from constructor"
    }
}


class Lastname extends Name {
    stop = "here it stops"
    constructor(name, age, start) {
        super(name, age, start)
        // this.name = "Momo"
    }
}

const joi = new Lastname("marian", 33, "boston")

console.log(typeof Name)
console.log(joi.stop)
console.log(joi.start)
console.log(joi.name)
console.log()