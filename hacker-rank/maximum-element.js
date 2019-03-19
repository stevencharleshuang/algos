/**
 * Maximum Element
 * https://www.hackerrank.com/challenges/maximum-element/problem
 * 
 * @function processData
 * @description For each type 3 query, print the maximum element in the stack on a new line.
 * @param {string}
 */

let stack = [];

function processData(input) {
  if (input[0] === '1') {
    stack.push(input.slice(2));
  } else if (input[0] === '2') {
    stack.pop();
  } else if (input[0] === '3') {
    console.log(Math.max(...stack));
  }
  // console.log(stack);
} 

let testCase;
testCase = [
  '1 97',
  '2',
  '1 20',
  '2',
  '1 26',
  '1 20',
  '2',
  '3',
  '1 91',
  '3'
]; // => 26 91

testCase.forEach(test => processData(test));
// console.log(processData(...testCase));

