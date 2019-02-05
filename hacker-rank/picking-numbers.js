/**
 * Picking Numbers
 * https://www.hackerrank.com/challenges/picking-numbers/problem
 * 
 * @desc It should return an integer that represents the length of the longest 
 * array that can be created.
 * 
 * @param {array} a: an array of integers
 * 
 * @return {number} A single integer denoting the maximum number of integers you 
 * can choose from the array such that the absolute difference between any two 
 * of the chosen integers is <= 1.
 */

 /*
function pickingNumbers(a) {
  // decs
  let maxNumInts = 0;
  let sortedArr = a.sort();
  let maxNumSubArr = [];
  let tempArr = [];

  sortedArr.forEach((num, i) => {
    if ((Math.abs(num - sortedArr[i - 1]) <= 1 || Math.abs(num - sortedArr[i + 1]) <= 1)) {
      tempArr.push(num);
    }
    if (tempArr.length > 1 && Math.abs(num - tempArr[0] > 1)) {
      tempArr.pop();
    } 
    console.log(tempArr);
  });

  // returns and logs
  maxNumSubArr = tempArr;
  maxNumInts = maxNumSubArr.length;
  console.log({ maxNumInts, sortedArr, maxNumSubArr });
  return maxNumInts;
}
*/
/*
function pickingNumbers(a) {
  let numHash = {}
  let tempSum = 0;

  a.forEach(num => {
    !numHash[num] ? numHash[num] = 1 : numHash[num] += 1;
  });

  for (let num in numHash) {
    if (numHash[parseInt(num) + 1]) {
      tempSum = numHash[num] + numHash[parseInt(num) + 1];
    }
  }
  console.log({ numHash, tempSum });
}
*/

function pickingNumbers(a) {
  let sortedArr = a.slice().sort();
  let tempArr = [];

  sortedArr.forEach((num, i) => {
    if (Math.abs(num - sortedArr[i + 1]) <= 1 || Math.abs(num - sortedArr[i - 1]) <= 1) {
      if (tempArr.length >= 1 && num - tempArr[0] <= 1) {
        tempArr.push(num);
      } else if (tempArr.length < 1) {
        tempArr.push(num);
      }
    }
  });
  
  console.log({ sortedArr, tempArr });
  return tempArr.length;
}

let arr;
arr = [ 1, 1, 2, 2, 4, 4, 5, 5, 5 ]; // > [ 1, 1, 2, 2 ] [ 4, 4, 5, 5, 5, ] => 5
// arr = [ 1, 1, 1, 1, 3, 3, 4, 4 ]; // => 4
// arr = [ 1, 1, 1, 1, 3, 3, 3, 4, 4 ]; // => 5
// arr = [ 4, 6, 5, 3, 3, 1 ]; // => 3
// arr = [ 1, 2, 2, 3, 1, 2 ]; // => 5

let result = pickingNumbers(arr);
console.log({ result });

/* Pseudo Code
Given an array of integers, find and print the maximum number of integers you 
can select from the array such that the absolute difference between any two of 
the chosen integers is less than or equal to 1

Dec vars to return
Sort the arr
Iterate through sorted arr
*/