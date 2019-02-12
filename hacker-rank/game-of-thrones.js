/**
 * Game of Thrones
 * https://www.hackerrank.com/challenges/game-of-thrones/problem
 * 
 * @description determines whether a given string can be rearranged into a palindrome. If it is possible, return YES, otherwise return NO.
 * @param {string} s: a string to analyze
 * @returns {string} A single line which contains YES or NO.
 */

function gameOfThrones(s) {
  let charHash = {};
  let oddChars = 0;

  s.split('').forEach((char) => charHash[char] ? charHash[char] += 1 : charHash[char] = 1);

  for (let char in charHash) {
    if (charHash[char] % 2 !== 0) {
      oddChars += 1;
    }
  }

  return oddChars > 1 ? 'NO' : 'YES';
}

let testCase;
testCase = 'aaabbbb'; // => YES
// testCase = 'cdefghmnopqrstuvw'; // => NO
// testCase = 'cdcdcdcdeeeef'; // => YES

console.log(gameOfThrones(testCase));

/* Pseudo Code
hash
if more than one odd value then not a palindrome

*/

