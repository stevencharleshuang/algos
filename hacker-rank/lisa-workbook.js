/**
 * Lisa's Workbook
 * https://www.hackerrank.com/challenges/lisa-workbook/problem
 * 
 * @description It should return an integer that represents the number of special problems in the workbook.
 * @param n: an integer that denotes the number of chapters
 * @param k: an integer that denotes the maximum number of problems per page
 * @param arr: an array of integers that denote the number of problems in each chapter
 * @returns {number} The number of special problems in Lisa's workbook
 */

function workbook(n, k, arr) {
  let specialProblems = 0;
  let page = 0;

  arr.forEach(numProblems => {
    let problem = 1;
    while (problem <= numProblems) {
      if (k === 1) {
        page += 1;
      }
      if (problem % k === 1) {
        page += 1;
      }
      
      if (problem === page) {
        specialProblems += 1;
      }
        
      console.log({numProblems, page, problem, specialProblems });
      problem += 1;
    }
  });

  return specialProblems;
}

let testCase;
testCase = [ 2, 3, [ 4, 2 ]]; // => 1
// testCase = [ 5, 3, [ 4, 2, 6, 1, 10] ]; // => 4
// testCase = [ 10, 5, [ 3, 8, 15, 11, 14, 1, 9, 2, 24, 31 ] ]; // => 8
testCase = [1, 1, [ 100 ]]; // => 100

const result = workbook(...testCase);
console.log(result);

/* Pseudo Code 
  A problem is "special" if the number of the problem matches the page number it appears on
  The array length will match the number of chapters
  Each element of the number will dictate the number of problems that appear in each chapter
  Because k dictates the max number of problems that appear on a page, page numbers can be determined
  There should always be 1 special problem returned for problem 1 on page 1 of chapter 1

  memoize number of special problems init at 0
  memoize page init at 1
  iterate through arr of chapter problems
  page += Math.floor(arr[i] / k)
  if (page === )

*/

