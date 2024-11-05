
/*
let aa = 0


const rr = () => {
  
  console.log()
  aa++
  return rr


  }

rr()()()()()()

console.log("aa este ", aa)
*/

let aa = 0


const rr = () => {
  
  console.log()
  aa++
  if(aa === 10) return
  return rr()


  }

rr()

console.log("aa este ", aa)