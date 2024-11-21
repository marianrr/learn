
// const mi = "username=azure+green&password=password%21"
// let a = mi.split('&')
// console.log("a este ", a)

// let b = a.map(elem => elem = elem.split("="))
// console.log(b)

// let c = b.map(elem => {

//      let d = elem.map(el => el.split("+").join(" "))
// return d
// })
// console.log(c)

let dd = [
    ["username", "azure green"],
    ["password", "password!"],
  ]
function fifthStep(input) {
  
    let obj = {}
    
    input.forEach(elem => {
        console.log(elem[0])
      obj[elem[0]] = elem[1]
    })
    return obj
    
    
    }


    console.log(fifthStep(dd))