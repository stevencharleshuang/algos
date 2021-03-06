/**
 * The Love Letter Mystery
 * https://www.hackerrank.com/challenges/the-love-letter-mystery/problem
 * 
 * @description It should return the integer representing the minimum number of operations needed to make the string a palindrome.
 * @param {string} s: a string
 * @returns {number} The minimum operations for needed to make the string a palindrome
 */

function theLoveLetterMystery(s) {
  let count = 0;

  for (let i = 0; i < Math.ceil(s.length / 2); i += 1) {
    let front = s[i], end = s[s.length - i - 1];
    
    if (front !== end) {
      count += Math.abs(s.charCodeAt(i) - s.charCodeAt(s.length - i - 1));
    }
  }

  return count;
}

let testCase;
testCase = 'abc'; // => 2
// testCase = 'abcba'; // => 0
// testCase = 'abcd'; // => 4
// testCase = 'cba'; // => 2

console.log(theLoveLetterMystery(testCase));

/* Pseudo Code 
Can only reduce the value of a letter by 1
  Use Charcodes
Letter 'a' may not be reduced any further

Iterate the string and go from the first and last characters inward
  Check char value of the first and last letter
    Whichever char value is higher, count += the diff


*/

