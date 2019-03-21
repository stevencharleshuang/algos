/**
 * @function array_diff
 * @description https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
 * @param {array} a: base array 
 * @param {array} b: array of elements to remove from base array
 * @returns {array} the mutated array
 */

// My Solution
 /*
function array_diff(a, b) {
  let resultsArr = [];

  b.forEach(num => {
    let tempIndex = a.indexOf(num);
    if (tempIndex > -1) {
      while (tempIndex > -1) {
        a.splice(tempIndex, 1);
        tempIndex = a.indexOf(num);
      }
    }
  });

  return a;
}
*/

// Elegant Solution
function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}

console.log(array_diff([], [4,5])); // => [], "a was [], b was [4,5]");
// console.log(array_diff([3,4], [3])); // => [4], "a was [3,4], b was [3]");
// console.log(array_diff([1,8,2], [])); // => [1,8,2], "a was [1,8,2], b was []");
console.log(array_diff([1,8,2,4,4], [2,4])); // => [1,8]

/* Pseudo Code
Iterate arr b
  if index of b[i] in arr a > -1
    while (index of b[i] in arr a > -1) 
    resultArr = slice up to the index concat what's after the index
Return resultsArr
*/

