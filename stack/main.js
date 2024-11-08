// Stack create with functions

const stack = []
const addToStack = (val) => {
    stack.push(val)
}
const removeFromStack = () => {
    stack.pop()
}

addToStack(1)
addToStack(2)
addToStack(3)
addToStack(4)
addToStack(5)
console.log(stack)
removeFromStack()
removeFromStack()
removeFromStack()
console.log(stack)