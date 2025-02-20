class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
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
function display4Tree(root) {
    if (root === null) return
    display4Tree(root.left)
    display4Tree(root.right)
    console.log(root.val)

}

const [a, b, c, d, e] = ['a', 'b', 'c', 'd', 'e'].map(elem => new TreeNode(elem))

a.left = b
a.right = e
b.left = c
b.right = d


// displayTree(a)
// display2Tree(a)
// display3Tree(a)
display4Tree(a)
