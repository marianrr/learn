class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

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

// Depth-first search

// Pre-order traversal
// function displayTree(root) {
//     if (root === null) return
//     console.log(root.val)
//     displayTree(root.left)
//     displayTree(root.right)

// }

// In-order traversal
// function display2Tree(root) {
// if(root === null) return
// display2Tree(root.left)
// console.log(root.val)
// display2Tree(root.right)

// }


// Post-order traversal
// function display3Tree(root) {
//     if (root === null) return
//     display3Tree(root.left)
//     display3Tree(root.right)
//     console.log(root.val)

// }


// Breadth-first traversal
// function display4Tree(root) {
//     if (root === null) return
//     display4Tree(root.left)
//     display4Tree(root.right)
//     console.log(root.val)

// }



function display5Tree(root) {
    const v = new Queue1()
    v.enqueue(root)
    display5Tree(root.left)
    v.dequeue()
    display5Tree(root.right)
    v.enqueue(root)
    console.log(v)


}


const [a, b, c, d, e] = ['a', 'b', 'c', 'd', 'e'].map(elem => new TreeNode(elem))

a.left = b
a.right = e
b.left = c
b.right = d


// displayTree(a)
// display2Tree(a)
// display3Tree(a)
// display4Tree(a)
console.log(display5Tree(a))

