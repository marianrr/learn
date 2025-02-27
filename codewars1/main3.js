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
