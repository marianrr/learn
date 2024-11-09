class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class List {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    prependHead(val) {
        const node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = node
        }
        else {
            node.next = this.head
            this.head = node
        }
        this.length++
    }

    appendTail(val) {
        const node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = node
        }
        else {
            this.tail.next = node
            this.tail = node
        }
        this.length++
    }
    printList() {
        let node = this.head;
        const listValues = [];
        while (node) {
            listValues.push(node.val);
            node = node.next;
        }
        console.log(listValues, this.length);
    }

    seeHead() {
        console.log(this.head.val)
    }

    seeTail() {
        console.log(this.tail.val)
    }

    removeHead() {

        this.head = this.head.next
        this.length--
    }

    removeTail() {
let node = this.head
let i = 1
while(node) {
    if(i === this.length-1) {
        this.tail = node
        this.tail.next = null
        this.length--
        return
    }
    node = node.next
i++
}


        
    }
}
const lol = new List()
lol.prependHead(1)
lol.prependHead(2)
lol.prependHead(3)
lol.prependHead(4)
lol.prependHead(5)
lol.printList()

// const lol = new List()
// lol.appendTail(1)
// lol.appendTail(2)
// lol.appendTail(3)
// lol.appendTail(4)
// lol.appendTail(5)
// lol.printList()

// lol.seeHead()
// lol.seeTail()
// lol.removeHead()
// lol.printList()

console.log("head")
lol.seeHead()
console.log("tail")
lol.seeTail()

//lol.printList()

lol.removeTail()

lol.printList()
console.log("head")
lol.seeHead()
console.log("tail")
lol.seeTail()

