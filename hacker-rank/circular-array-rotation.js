/**
 * Circular Array Rotation
 * https://www.hackerrank.com/challenges/circular-array-rotation/problem
 * 
 * @function circularArrayRotation
 * @description
 * @param {array} a: an array of integers to rotate
 * @param {number} k: an integer, the rotation count
 * @param {array} queries: an array of integers, the indices to report
 * @returns For each query, print the value of the element at index m of the rotated array on a new line
 */

function circularArrayRotation(a, k, queries) {
  let rotatedArr; 
  let queryArr = [];
  
  k > a.length ? 
    rotatedArr = a.slice(-(k % a.length)).concat(a.slice(0, -(k % a.length))) :
    rotatedArr = a.slice(-k).concat(a.slice(0, -k));

  queries.forEach(index => queryArr.push(rotatedArr[index]));
  
  return queryArr;
}

let testCase;

// testCase = [[1, 2, 3], 2, [0, 1, 2]]; // => 2 3 1
testCase = [[1, 2, 3], 5, [0, 1, 2]]; // -> 3 1 2 -> 2 3 1 -> 1 2 3 -> 3 1 2

console.log(circularArrayRotation(...testCase));

