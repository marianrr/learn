// functii constructor

function User(name, password, age) {
    this.name = name
    this.password = password
    this.age = age
    this.show = function () {
        return this.name + "--" + this.password + "--" + this.age
    }
}

const user1 = new User("Marian", "one two", 20)
console.log('Metoda show este: ', user1.show())
console.log(user1)
console.table(user1)