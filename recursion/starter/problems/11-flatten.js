/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {

  if (arr.length === 0) return []
  if (arr.length === 1) {
    if(arr[0][0]) return arr[0][0]
    else return arr[0]
  }
  if (arr[0][0]) return [arr[0][0]].concat(flatten(arr[0].slice(1)))
  return [arr[0]].concat(flatten(arr.slice(1)))



}

console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
