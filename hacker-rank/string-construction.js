/**
 * String Construction
 * https://www.hackerrank.com/challenges/string-construction/problem
 * 
 * @description It should return the minimum cost of copying a string.
 * @param {string} s: a string
 * @returns {number} print the minimum cost of constructing a new string p[i] on a new line.
 */

function stringConstruction(s) {
  let minCost = 0;
  let newString = '';

  for (let i = 0; i < s.length; i += 1) {
    if (newString === s.slice(i)) {
      break;
    } else if (newString.indexOf(s[i]) > -1) {
      continue;
    } else {
      newString += s[i];
      minCost += 1;
    } 
  }

  return minCost;
}

/* Alternate Solution from HR Discussions */
// function stringConstruction(s) {
//   return [...new Set(s)].length
// }

let testCase;
testCase = 'abcd'; // => 4
testCase = 'abab'; // => 2
// testCase = 'scfg'; // => 4
// testCase = 'bccb'; // => 2
// testCase = 'abcabc'; // => 3

console.log(stringConstruction(testCase));

/* Pseudo Code
Append cost = 1
Substring cost = 0
Track the cost and return the cost
Track the new string
Do a slice per iteration and compare to the remainder of the string
  if match, break the loop
  not match, add to the cost of appending
*/

