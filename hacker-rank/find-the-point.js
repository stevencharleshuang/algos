/**
 * Find the Point
 * https://www.hackerrank.com/challenges/find-point/problem
 * 
 * @function findPoint
 * @description 
 * @param {number} px: 
 * @param {number} py:
 * @param {number} qx:
 * @param {number} qy:
 * @returns For each pair of points  and , print the corresponding respective values of  and  as two space-separated integers on a new line.
 */

function findPoint(px, py, qx, qy) {
  return [(qx + (qx - px)), (qy + (qy - py))];
}

let testCase;
testCase = [ 0, 0, 1, 1 ]; // => [ 2, 2 ]
testCase = [ 1, 1, 2, 2 ]; // => [ 3, 3 ]
testCase = [ 1, 1, 2, 2 ]; // => [ 3 3]
testCase = [ 4, 3, 5, 2 ]; // => [ 6 1]
testCase = [ 2, 4, 5, 6 ]; // => [ 8 8]
testCase = [ 1, 2, 2, 2 ]; // => [ 3 2]
testCase = [ 1, 1, 1, 1 ]; // => [ 1 1]
testCase = [ 1, 2, 2, 1 ]; // => [ 3 0]
// testCase = [ 1, 8, 7, 8 ]; // => [ 13 8]
// testCase = [ 9, 1, 1, 1 ]; // => [ -7 1]
// testCase = [ 8, 4, 3, 2 ]; // => [ -2 0]
testCase = [ 7, 8, 9, 1 ]; // => [ 11 -6]


console.log(findPoint(...testCase));

/* Pseudo Code
*/

