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
/*
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
*/

function pickingNumbers(a) {
  let sortedArr = a.sort((a, b) => a - b);
  let breakIndices = [ 0 ];
  let maxBreak = 0;
  let count = 0;
  let tempLo = sortedArr[0];

  for (let i = 0; i < sortedArr.length; i += 1) {
    count += 1;
    // console.log({ count });
    if (sortedArr[i + 1] - sortedArr[i] > 1 || sortedArr[i + 1] - tempLo > 1 || (sortedArr[i + 1] === undefined)) {
      // breakIndices.push(i + 1);
        if (count > maxBreak) {
          maxBreak = count;
          count = 0;
        }
      tempLo = sortedArr[i];
    }
  }

  console.log({ sortedArr, maxBreak });
  return maxBreak;
}

let arr;
arr = [ 1, 1, 2, 2, 4, 4, 5, 5, 5 ]; // > [ 1, 1, 2, 2 ] [ 4, 4, 5, 5, 5, ] => 5
arr = [ 1, 1, 1, 1, 3, 3, 4, 4 ]; // => 4
// arr = [ 1, 1, 1, 1, 3, 3, 3, 4, 4 ]; // => 5
// arr = [ 4, 6, 5, 3, 3, 1 ]; // => 3
arr = [ 1, 2, 2, 3, 1, 2 ]; // => 5
arr = '14 18 17 10 9 20 4 13 19 19 8 15 15 17 6 5 15 12 18 2 18 7 20 8 2 8 11 2 16 2 12 9 3 6 9 9 13 7 4 6 19 7 2 4 3 4 14 3 4 9 17 9 4 20 10 16 12 1 16 4 15 15 9 13 6 3 8 4 7 14 16 18 20 11 20 14 20 12 15 4 5 10 10 20 11 18 5 20 13 4 18 1 14 3 20 19 14 2 5 13'.split(' '); // => 15

let result = pickingNumbers(arr);
console.log({ result });

/* Pseudo Code
Given an array of integers, find and print the maximum number of integers you 
can select from the array such that the absolute difference between any two of 
the chosen integers is less than or equal to 1

Dec vars to return
Sort the arr
Iterate through sorted arr

sort
iterate through and look for breaks
memoize i
*/