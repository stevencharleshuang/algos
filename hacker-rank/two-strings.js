/**
 * Two Strings
 * https://www.hackerrank.com/challenges/two-strings/problem
 * 
 * @description It should return a string, either YES or NO based on whether the strings share a common substring.
 * @param {string} s1: a string to analyze
 * @param {string} s2: a string to analyze
 * @returns For each pair of strings, return YES or NO
 */

/* Works but times out on huge datasets
*/
// function twoStrings(s1, s2) {
//   s1 = s1.split('');
//   s2 = s2.split('');

//   for (let i = 0; i < s1.length; i += 1) {
//     let found = s2.find((char) => char === s1[i]);
//     if (found) {
//       return 'YES';
//     }
//   }

//   return 'NO';
// }

function twoStrings(s1, s2) {
  for (let i = 0; i < s1.length; i += 1) {
    if (s2.indexOf(s1[i]) > -1) {
      return 'YES'
    }
  }
  return 'NO';
}


let testCase;
testCase = [ 'hello', 'world' ]; // => YES
// testCase = [ 'hi', 'world' ]; // => NO
testCase = [ 'wouldyoulikefries', 'abcabcabcabcabcabc' ]; // => NO
testCase = [ 'hackerrankcommunity', 'cdecdecdecde' ]; // => YES
// testCase = [ 'jackandjill', 'wentupthehill' ]; // => YES
// testCase = [ 'writetoyourparents', 'fghmqzldbc' ]; // => NO

console.log(twoStrings(...testCase));

/* Pseudo Code 
  split the strings to arrs
  iterate through the string
    use arr.find(); 

  use indexOf

*/

