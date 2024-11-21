function firstStep(input) {
  
return input.split("&")




}

function secondStep(input) {
  
return input.map(elem => elem.split("="))


}

function thirdStep(input) {

return input.map(elem => elem.map(elem => elem.split("+").join(" ")))

}

function fourthStep(input) {
  return input.map(elem => elem.map( elem => decodeURIComponent(elem)))

}

function fifthStep(input) {
  
  let obj = {}
    
  input.forEach(elem => {
    obj[elem[0]] = elem[1]
  })
  return obj
}

function parseBody(str) {
  



  return fifthStep(fourthStep(thirdStep(secondStep(firstStep(str)))))

  
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};