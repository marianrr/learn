class Stack {
    constructor() {
this.so = []
    }

     addStack (val){
this.so.push(val)
    }

     removeStack (){
        this.so.pop()
            }

}

const wo = new Stack()
wo.addStack(1)
wo.addStack(2)
wo.addStack(3)
wo.addStack(4)
wo.addStack(5)

wo.removeStack()
wo.removeStack()
wo.removeStack()
console.log(wo.so)

wo.addStack(99)
console.log(wo.so)