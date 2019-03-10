/**
 * Max Min
 * https://www.hackerrank.com/challenges/angry-children/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
 * @function maxMin
 * @description It must return an integer that denotes the minimum possible value of unfairness
 * @param {number} k: an integer, the number of elements in the array to create
 * @param {array} arr: an array of integers
 * @returns {number} An integer that denotes the minimum possible value of unfairness
 */

function maxMin(k, arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let minDiff = sortedArr[arr.length - 1];

  for (let i = 0; i < sortedArr.length - (k - 1); i += 1) {
    let tempDiff = sortedArr[i + (k - 1)] - sortedArr[i];
    console.log({ minDiff, tempDiff });
    if (tempDiff < minDiff) {
      minDiff = tempDiff;
    }
  }

  return minDiff;
}

let testCase;
testCase = [2, [ 1, 4, 7, 2 ]]; // => 1
// testCase = [3, [ 10, 100, 300, 200, 1000, 20, 30 ]]; // => 20
// testCase = [3, [ 100, 200, 300, 350, 400, 401, 402 ]]; // => 2

console.log(maxMin(...testCase));

/* Pseudo Code
sort the array argument
slice the sorted array num indices = k
get difference of max of sliced arr and min of sliced arr
return diff
*/

