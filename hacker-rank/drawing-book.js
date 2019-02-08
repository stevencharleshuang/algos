/**
 * Drawing Book
 * https://www.hackerrank.com/challenges/drawing-book/problem
 * 
 * @desc It should return the minimum number of pages Brie must turn.
 * @param {number} n: the number of pages in the book
 * @param {number} p: the page number to turn to
 * @return {number} An integer denoting the number of pages Brie must turn to get to page p
 */

function pageCount(n, p) {
  let half = n / 2;
  let right = Math.floor(n/2 - p/2);
  let left = Math.floor(p/2);

  let numTurns = right < left ? right : left;

  return numTurns;
}

let testCase;
testCase = [ 5, 4 ]; // => 0
// testCase = [ 6, 2 ]; // => 1
// testCase = [ 6, 5 ]; // => 1

let result = pageCount(...testCase);
console.log({ result });

/* Pseudo Code
  Figure out if the target page is in the former or latter half of the book
  Determine the number of pages she has to turn by 2s
*/