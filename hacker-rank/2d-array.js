/**
 * 2D Array - DS
 * https://www.hackerrank.com/challenges/2d-array/problem?h_r=next-challenge&h_v=zen
 * 
 * @function hourglassSum
 * @description It should return an integer, the maximum hourglass sum in the array.
 * @param {array} arr: a 2D array to analyze
 * @returns {number} the maximum hourglass sum in the array
 */

function hourglassSum(arr) {
  let maxSum = -64;
  
  for (let i = 0; i <= arr.length - 3; i += 1) {
    for (let j = 0; j <= arr[i].length - 3; j += 1) {
      let tempSum = 
      arr[i][j] + 
      arr[i][j + 1] + 
      arr[i][j + 2] + 
      arr[i + 1][j + 1] + 
      arr[i + 2][j] + 
      arr[i + 2][j + 1] +
      arr[i + 2][j + 2];

      if (tempSum > maxSum) {
        maxSum = tempSum;
      }
    }
  }

  return maxSum;
}

let testCase;
testCase = [
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0 ],
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 0, 2, 4, 4, 0 ],
  [ 0, 0, 0, 2, 0, 0 ],
  [ 0, 0, 1, 2, 4, 0 ]
]; // => 19

// testCase = [
//   [ 1, 1,  1,  0,  0, 0 ],
//   [ 0, 1,  0,  0,  0, 0 ],
//   [ 1, 1,  1,  0,  0, 0 ],
//   [ 0, 9,  2, -4, -4, 0 ],
//   [ 0, 0,  0, -2,  0, 0 ],
//   [ 0, 0, -1, -2, -4, 0 ]
// ]; // => 13

// testCase = [
//   [ -9, -9, -9,  1, 1, 1 ],
//   [  0, -9,  0,  4, 3, 2 ],
//   [ -9, -9, -9,  1, 2, 3 ],
//   [  0,  0,  8,  6, 6, 0 ],
//   [  0,  0,  0, -2, 0, 0 ],
//   [  0,  0,  1,  2, 4, 0 ]
// ]; // => 28

testCase = [
  [ -1, -1,  0, -9, -2, -2 ],
  [ -2, -1, -6, -8, -2, -5 ],
  [ -1, -1, -1, -2, -3, -4 ],
  [ -1, -9, -2, -4, -4, -5 ],
  [ -7, -3, -3, -2, -9, -9 ],
  [ -1, -3, -1, -2, -4, -5 ]
]; // => -6

testCase = [
  [ -1,  1, -1,  0,  0, 0 ],
  [  0, -1,  0,  0,  0, 0 ],
  [ -1, -1, -1,  0,  0, 0 ],
  [  0, -9,  2, -4, -4, 0 ],
  [ -7,  0,  0, -2,  0, 0 ],
  [  0,  0, -1, -2, -4, 0 ]
] // => 0

console.log(hourglassSum(testCase));

/* Pseudo Code 
hourglass = a b c
              d
            e f g

arr[0][0] arr[0][1] arr[0][2]
          arr[1][1]
arr[2][0] arr[2][1] arr[2][2]

arr[i][j]     arr[i][j + 1]     arr[i][j + 2]
              arr[i + 1][j + 1]
arr[i + 2][j] arr[i + 2][j + 1] arr[i + 2][j + 2]

memoize a maxSum
memoize a tempSum
iterate arr with for loop
sum the values
if tempSum greater than maxSum, update maxSum
return maxSum
*/

