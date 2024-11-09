
class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.previous = null
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
            this.head.previous = node
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
            node.previous = this.tail
            this.tail = node

        }
        this.length++

    }


    printList() {

        let node = this.head
        let s = []
        if (node) {

            while (node) {
                s.push(node.val)
                node = node.next
            }

        }


        console.log(s, this.length)
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
        let i = 1
        let node = this.head
        while (node) {
            if (i === this.length - 1) {
                this.tail = this.tail.previous
                this.tail.next = null
                this.length--
                return
            }

            i++
        }


    }



}



// const list = new List()
// list.prependHead(1)
// list.prependHead(2)
// list.prependHead(3)
// list.prependHead(4)
// list.prependHead(5)

// list.printList()
// list.seeHead()
// list.seeTail()

// list.removeHead()

// list.printList()
// list.seeHead()
// list.seeTail()

// list.removeTail()

// list.printList()
// list.seeHead()
// list.seeTail()

const list = new List()
list.appendTail(1)
list.appendTail(2)
list.appendTail(3)
list.appendTail(4)
list.appendTail(5)

list.printList()
list.seeHead()
list.seeTail()


list.removeTail()

list.printList()
list.seeHead()
list.seeTail()