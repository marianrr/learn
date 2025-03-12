const range1 = (start, end) => {

    if (start > end) return []
    if (end === start + 1) {
        return []
    }
    return [++start].concat(range1(start, end))

}

console.log(range1(1, 8))
console.log(range1(0, 5))
console.log(range1(7, 20))