/**
 * Array Manipulation
 * https://www.hackerrank.com/challenges/crush/problem
 * 
 * @function
 * @description
 * @param
 * @param
 * @returns
 */

// Solution is passing but timing out on certain test cases
/*
function arrayManipulation(n, queries) {
  let zerosArr = [];
  let maxVal = 0;

  for (let i = 0; i < n; i += 1) {
    zerosArr.push(0);
  }

  for (let i = 0; i < queries.length; i += 1) {
    for (let j = queries[i][0] - 1; j <= queries[i][1] - 1; j += 1) {
      zerosArr[j] += queries[i][2];
      if (zerosArr[j] > maxVal) {
        maxVal = zerosArr[j];
      } 
    }
  }

  return maxVal;
}
*/

// Solution is passing but timing out on certain test cases
function arrayManipulation(n, queries) {
  let hash = {}
  
  for (let i = 0; i < queries.length; i += 1) {
    for (let j = queries[i][0] - 1; j <= queries[i][1] - 1; j += 1) {
      hash[j] ? hash[j] += queries[i][2] : hash[j] = queries[i][2];
    }
  }

  return Math.max(...Object.values(hash));
}

let testCase;

testCase = [ 10, [
  [ 1, 5, 3 ],
  [ 4, 8, 7 ],
  [ 6, 9, 1 ]
] ]; // => 10

// testCase = [ 5, [
//   [ 1, 2, 100 ],
//   [ 2, 5, 100 ],
//   [ 3, 4, 100 ]
// ]]; // => 200


console.log(arrayManipulation(...testCase));

/* 
Pseudo Code:
  Create a var to store maxVal of array element
  Create an array of 0's
  iterate the queries array
    queries[i][0] = start index - 1
    queries[i][1] = end indes - 1
    queries[i][2] = number to add to each element in the given range
  Return the maxVal of 0's arr

  //

  Create a hash of nums and vals
  iterate through the queries and add to each value

*/