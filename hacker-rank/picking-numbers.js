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

// Converted Java solution from discussion board
// Fails 4/10 test cases
function pickingNumbers(a) {
  // Sort the arr
  let sortedArr = a.sort();
  // Declare a var to store length of sorted arr
  let len = sortedArr.length;
  // Memoize max, init to 0
  let max = 0;
  // Memoize sameElement, init to 0
  let sameElement = 0;
  
  // Iterate through the sorted array in reverse direction
  for (let i = len - 1; i >= 0 ; i -= 1) {
    // Declare a temporary count init at 1
    let count = 1;

    // Conditional block
    // If val of current index is equal to same value, continue
    if (sortedArr[i] === sameElement) {
      continue;
    // Else, assign the value of current index to sameElement var
    } else {
      sameElement = sortedArr[i];
    }

    // Iterate 1 index less than current index in reverse direction
    for (let j = i - 1; j >= 0; j -= 1) {     
      // Conditional block
      // If the difference of the current index value and the index value 1 before current is less than 2 
      if ((sortedArr[i] - sortedArr[j]) < 2) {
        // Increment count by 1
        count += 1;
      }
    }

    // If value of count is greater than the value of max, assign max the value of count, else value of max remains
    max = count > max ? count : max;
  }
  // return the value of max
  return max;
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