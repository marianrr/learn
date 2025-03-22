// console.log(" 1---", this)
// const user = {
//     name: "Walker",
//     sayName() {
//         console.log(" 2---", this)
//     }
// }
// user.sayName()

// //

// function so() {
//     console.log(" 3---", this)
// }
// so()
//


const user = {
    name: "Walker",
    sayName: () => {
        console.log(" 4---", this)
    }
}
user.sayName()


