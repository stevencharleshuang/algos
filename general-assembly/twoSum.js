/**
 * @function twoSum
 * @description Given an array of numbers and a target number, returns the first two numbers that are the sum of the target number
 * @param {array} arr: an array of numbers to analyze
 * @param {number} t: a target number
 * @returns an array containing a pair of numbers that satisfies the conditions or 'No pairs' if none exist
 */
const twoSum = (arr, t) => {
  for (let i = 0; i < arr.length; i += 1) {
    let diff = t - arr[i];
    
    if (
      arr.indexOf(diff) > -1 &&
      arr.indexOf(diff) !== i) {
      return [ arr[i], arr[arr.indexOf(diff)] ];
    }
  }

  return 'No pairs';
};

module.exports = twoSum;