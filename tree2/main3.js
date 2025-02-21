class Queue1 {
    constructor() {
        this.items = []
    }
enqueue(elem) {
    this.items.push(elem)
}
dequeue() {
    this.items.shift()
}
}

const a = new Queue1()
console.log(a)
a.enqueue(1)
a.enqueue(2)
a.enqueue(3)
a.enqueue(4)
console.log(a)

