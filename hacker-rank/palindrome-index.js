/**
 * Palindrome Index
 * https://www.hackerrank.com/challenges/palindrome-index/problem
 * 
 * @description It must return the index of the character to remove or -1
 * @param {string} s: a string to analyze
 * @returns Print an integer denoting the zero-indexed position of the character to remove to make s a palindrome. If s is already a palindrome or no such character exists, print -1.
 */

// This solution terminates due to timeout
function palindromeIndex(s) {
  if (s.slice(0, Math.floor(s.length / 2)) ===
      s
      .slice(Math.ceil(s.length / 2))
      .split('')
      .reverse()
      .join('')) {
    return -1;
  }

  for (let i = 0; i < s.length; i += 1) {
    let tempS = ''; 
    i === 0 ? tempS = s.slice((i + 1)) : tempS = s.slice(0, (i)) + s.slice(i + 1);
    if (tempS === tempS.split('').reverse().join('')) {
      return i;
    }
  }
  return -1
}

// Solution from Discussions
// function palindromeIndex(s) {
//   const checkPal = string => {
//     return string.slice(0, Math.floor(string.length / 2)) ===
//     string
//     .slice(Math.ceil(string.length / 2))
//     .split('')
//     .reverse()
//     .join('');
//   }

//   for (let i = 0; i < s.length / 2; i += 1) {
//     if (s[i] !== s[s.length - 1 - i]) {
//       const stringA = s.slice(0, i).concat(s.slice(i + 1));
//       const stringB = s.slice(0, s.length - 1 - i).concat(s.slice(s.length - i));
      
//       if (checkPal(stringA)) return i;
//       if (checkPal(stringB)) return s.length - 1 - i;

//       return -1;
//     }
//   }

//   return -1;
// }

let testCase;
// testCase = 'aaab'; // => 3
// testCase = 'baa'; // => 0
// testCase = 'aaa'; // => -1
testCase = 'abc'; // => -1

console.log(palindromeIndex(testCase));

/* Pseudo Code
If string is already a palindrome or impossible, return -1
Else return the index to remove
Bad:
  if s === s.reversed then s is already a palindrome
  Iterate string
  temp = s[i]
  tempS = s.slice(0, i) + s.slice(i)
  if (tempS === tempS.reversed) then return i
    isPossible = true
*/

