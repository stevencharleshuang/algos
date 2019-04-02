/**
 * Quick Sort 1
 * https://www.hackerrank.com/challenges/quicksort1/problem
 * 
 * @param {array} arr: The array to analyze 
 */

function quickSort(arr) {
  let left = [];
  let right = [];
  let equal = [];
  let pivot = arr[0];

  arr.forEach(el => {
    if (el < pivot) {
      left.push(el);
    } else if (el > pivot) {
      right.push(el);
    } else {
      equal.push(el);
    }
  });

  console.log(left.concat(equal.concat(right)));
}

let testCase;

testCase = [ 4, 5, 3, 7, 2 ];

console.log(quickSort(testCase));