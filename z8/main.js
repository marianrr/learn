const fizzBuzz = num => {
    for (let i = 0; i < num; i++) {
        console.log((i % 3 === 0 && i % 5 === 0) ? "Fizbuzz" :
            (i % 3 === 0) ? "Fizz" :
                (i % 5 === 0) ? "Buzz" : `${i}`)
    }
}

console.log(fizzBuzz(100))