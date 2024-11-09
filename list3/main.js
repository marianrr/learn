
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
            this.tail.next = node
            this.tail = node
        }
        this.length++
    }

    printList() {
        let node = this.head
        let arr = []
        while (node) {
            arr.push(node.val)
            node = node.next

        }
        console.log(arr, this.length)
    }

    returnLength() {
        console.log(this.length)
    }

    sumOfNodes() {
        let sum = 0
        let node = this.head
        while (node) {
            sum += node.val
            node = node.next
        }
        console.log(sum)
    }

    averageValueOfNodes() {
        let sum = 0
        let node = this.head
        while (node) {
            sum += node.val
            node = node.next
        }
        console.log(sum / this.length)
    }

    findNthNode(co) {
        let node = this.head
        let i = 1
        while (node) {
            if (i === co) {
                console.log("Valoarea nodului este: ", node.val)
                return
            }
            node = node.next
            i++
        }

    }






}



const list = new List()
list.prependHead(1)
list.prependHead(2)
list.prependHead(3)
list.prependHead(4)
list.prependHead(5)
list.prependHead(6)

list.printList()
list.returnLength()
console.log("Suma nodurilor este: ")
list.sumOfNodes()
console.log("Valoarea medie este: ")
list.averageValueOfNodes()
list.findNthNode(4)