const startTime = Date.now()
for(i=0; i < 100_000; i = i+2) {
    console.log(i)
}
const endTime = Date.now()
console.log("Is rendering in ", endTime - startTime, " ms.")