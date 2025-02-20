class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const [a, b, c, d, e] = ['a', 'b', 'c', 'd', 'e'].map(elem => new TreeNode(elem))

a.left = b
a.right = e
b.left = c
b.right = d

// console.log(a, b)


function displayTree(root) {
    if (root === null) return
    console.log(root.val)
    displayTree(root.left)
    displayTree(root.right)

}

displayTree(a)
//console.log(a)