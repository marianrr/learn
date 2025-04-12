import { fakerRO as fake } from '@faker-js/faker'

// let notes = []
// let i = 0
// for (let i = 0; i < 20; i++) {
//     let note = {
//         name: fake.person.firstName(),
//         id: ++i
//     }
//     notes.push(note)
// }

// //console.log(notes)



// console.log(fake.animal.type())
// console.log(fake.color.human())
// console.log(fake.color.human())
// console.log(fake.color.human())

for(let i = 0; i < 50; i++) {
    console.log(fake.number.int({ min: 1, max: 100 }))
}