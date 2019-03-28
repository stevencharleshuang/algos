/**
 * Closest Numbers
 * https://www.hackerrank.com/challenges/closest-numbers/problem
 * 
 * @function closestNumbers
 * @description
 * @param {array} arr: an array of numbers to analyze
 * @returns {array} 
 */

function closestNumbers(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let closestPairs = [];
  let smallestDiff = sortedArr[sortedArr.length - 1] - sortedArr[0];

  sortedArr.forEach((num, i) => {
    if (i + 1) {
      let tempDiff = Math.abs(num - sortedArr[i + 1]);
      
      if (tempDiff < smallestDiff) {
        closestPairs = [];
        smallestDiff = tempDiff;
        closestPairs.push(num);
        closestPairs.push(sortedArr[i + 1]);
      } else if (tempDiff === smallestDiff) {
        closestPairs.push(num);
        closestPairs.push(sortedArr[i + 1]);
      }
    }  
  })

  // console.log({ sortedArr, closestPairs, smallestDiff });
  return closestPairs;
}

let testCase;

testCase = [ -20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854 ]; // => [ -20, 30 ]
// testCase = [ -20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854, -520, -470 ]; // => [ -520, -470, =20, -30 ]
// testCase = [ 5, 4, 3, 2 ]; // => [2, 3, 3, 4, 4, 5]
// testCase = [ 5, 2, 3, 4, 1 ]; // => [1, 2, 2, 3, 3, 4, 4, 5]

console.log(closestNumbers(testCase));

