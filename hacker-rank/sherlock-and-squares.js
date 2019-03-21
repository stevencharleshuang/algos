/**
 * Sherlock and Squares
 * https://www.hackerrank.com/challenges/sherlock-and-squares/problem
 * 
 * @function squares
 * @description It should return an integer representing the number of square integers in the inclusive range from a to b .
 * @param {number} a: an integer, the lower range boundary It should return an integer representing the number of square integers in the inclusive range from a to b .
 * @param {number} b: an integer, the uppere range boundary
 * @returns {number} For each test case, print the number of square integers in the range on a new line.
 */

// Brute Force Solution
/* 
function squares(a, b) {
  let count = 0;

  for (let i = a; i <= b; i += 1) {
    // Check if number is whole
    if (Math.sqrt(i) % 1 === 0) {
      count += 1;
    }
  }
  
  return count;
}
*/

// Elegant Solution
function squares(a, b) {
  return Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1;
}


let testCase;

testCase = [ 3, 9 ]; // => 2
testCase = [ 17, 24 ]; // => 0
testCase = [ 35, 70 ]; // => 3
testCase = [ 100, 1000 ]; // => 22

console.log(squares(...testCase));