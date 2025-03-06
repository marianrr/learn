const whereIsBit = (num, index) => {
    let num2 = num.toString(2)
    console.log(num2)
    if (num && index < num2.length) {

        return num2[index]
    }
}

console.log(whereIsBit(14, 0))
console.log(whereIsBit(14, 1))
console.log(whereIsBit(14, 2))
console.log(whereIsBit(14, 3))