const isPalindrom = num => num.toString() === num.toString().split("").reverse().join("").toString()

console.log(isPalindrom(111))
console.log(isPalindrom(121))
console.log(isPalindrom(1234321))
console.log(isPalindrom(909))
console.log(isPalindrom(9090000))

console.log([2345].toString().split("").reverse().join("").toString())