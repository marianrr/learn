/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

// Your code here

// fetch("http://localhost:5000")
// .then(res => {
//     console.log("res este: ", res.status)
//     return res.text()
// })


/* ====== 2. Print true if the status of the response was successful ====== */

// Your code here


// fetch("http://localhost:5000/soto")
// .then(res => {
//     if(res.ok) {
//         console.log(true)
//         return true
//     }
//     else {
//         console.log(false)
//         return false
//     }
// })


/* =================== 3. Print the Content-Type Header =================== */

// Your code here

// fetch("http://localhost:5000")
// .then(res => {
//     console.log(res.headers)
//     console.log(res.headers.get("Content-Type"))
// })


/* ============== 4. Print the body of the response as text =============== */

// Your code here


fetch("http://localhost:5000")
.then(res => res.text())
.then(data => console.log(data))
