window.localStorage.setItem("emi", "unu")
console.log(window.localStorage)
console.log("Numele este ", window.localStorage.getItem("emi"))

sessionStorage.setItem("marian","kikila balantzain")
console.log("Sesiunea este:  ##########", sessionStorage.getItem("marian"), "........")
console.log(sessionStorage)
// localStorage.clear()
// sessionStorage.clear()

// console.log(window.localStorage)
// console.log(window.sessionStorage)


//redirectionare pe alt site
setTimeout(() => { window.location.href = "https://www.google.ro"}, 7000)
