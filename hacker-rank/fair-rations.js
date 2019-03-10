/**
 * @function fairRations
 * Fair Rations
 * https://www.hackerrank.com/challenges/fair-rations/problem
 * @description It should return an integer that represents the minimum number of loaves required.
 * @param {array} B: an array of integers that represent the number of loaves each persons starts with
 * @returns Print a single integer taht denotes the minimum number of loaves that must be distributed so that every person has an even number of loaves. If it's not possible to do this, print NO.
 */

function fairRations(B) {
  let loaves = 0;
  let arrSum = 0;
  
  B.forEach(num => arrSum += num);

  if (arrSum % 2 !== 0) {
    return 'NO';
  } else {
    for (let i = 0; i < B.length; i += 1) {
      if (B[i] % 2 !== 0) {
        B[i] += 1;
        B[i + 1] += 1;
        loaves += 2;
      }
    }
  }
  
  return loaves;
}

let testCase;
testCase = [ 4, 5, 6, 7]; // => 4
testCase = [ 2, 3, 4, 5, 6 ]; // => 4
// testCase = [ 1, 2 ]; // => NO

console.log(fairRations(testCase));

/* Pseudo Code 
Memoize a loaf count
Consider 'NO' cases:
  [ 1, 2 ]
  [ 2, 1, 2 ]
  [ 1, 2, 2 ]
  [ 1, 2, 3, 3 ]
  [ 1, 1, 1]
  [ 1, 2, 1, 1 ]
  [ 2, 1, 1, 1 ]
  [ 1, 2, 1, 1, 2 ]
  Consider 'YES' cases:
  [ 1, 2, 1, 2, 2 ]
  [ 1, 2, 1, 2 ]
  [ 2, 2, 2 ]
  [ 1, 2, 3 ]
  [ 1, 3, 2 ]
  [ 1, 2, 3, 4]
If sum of arr is odd, return NO
Iterate through the arr
  arr[i] is odd
  arr[i + 1] is even
  arr[i - 1] is even
*/

