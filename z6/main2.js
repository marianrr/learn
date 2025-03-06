class Parent {
    static koko = 555
    name1 = "Marian"
    constructor(age, location) {
        this.age = age
        this.location = location
    }

    display() {
        return `${this.location} and ${this.age} and ${this.name1}`
    }
}

class Child extends Parent {
    came() {
        return super.display()
    }
    camej() {
        return super.koko
    }
}

const eu = new Child(33, "miau")
console.log(eu.came())
console.log(eu.camej())