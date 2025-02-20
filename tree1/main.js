
class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function createTreeNode(value) {
    return new TreeNode(value);
}

let [a, b, c, d, e, f] = ['a', 'b', 'c', 'd', 'e', 'f'].map(createTreeNode);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
console.log(a, b)