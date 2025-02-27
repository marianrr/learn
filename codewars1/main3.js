<<<<<<< HEAD
function countFruits(halfFruits){
    let arr = []
    let lol = new Map()
      for(let i = 0; i < halfFruits.length; i = i+2) {
        if(halfFruits[i] < halfFruits[i+1]) continue
        else {
          const fruit = halfFruits[i] + halfFruits[i+1]
          if(fruitsName.includes(fruit)) arr.push(fruit)
        }
        arr = arr.sort((a, b) => a-b)
      console.log(arr)
        for(let j = 0; j < arr.length; j++) {
          let num = 0
          if(arr[j] === arr[j+1]) num++
          else {
            lol.set(`${arr[j]}`, num)
            num = 0
          }
        }
      }
      return lol
    }
    
    
    countFruits((["app","le","pe","ar","ban","ana"]))
=======
function separateLiquids(glass) {
    let text1 = []
    let m = glass.length
    let n = glass[0].length
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            text1.push(glass[i][j])
        }
    }
    console.log(text1)

let ss = 'OAWH'
let rr = {}

do{
let num = 0
for(let elem of text1) {
if(elem === ss[0]) num++
}
rr[ss[0]] = num
ss = ss.slice(1)
} while(ss.length)

console.log(rr)
let ii = 0
let gg = [...Array(rr["O"]).fill("O"),...Array(rr["A"]).fill("A"),...Array(rr["W"]).fill("W"),...Array(rr["H"]).fill("H")]

console.log(gg)

for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        glass[i][j] = gg[ii++]
    }
}
console.log(glass)



return glass

}



let glass = [['A', 'A', 'O', 'H'], ['A', 'H', 'W', 'O'], ['W', 'W', 'A', 'W'], ['H', 'H', 'O', 'O']]
separateLiquids(glass)
>>>>>>> a14ce7312553e4a1d3c319411f8e3a215301554a
