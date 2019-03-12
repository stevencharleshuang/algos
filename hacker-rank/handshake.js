/**
 * Handshake
 * https://www.hackerrank.com/challenges/handshake/problem?isFullScreen=false&h_r=next-challenge&h_v=zen
 * 
 * @function handshake
 * @description Print the number of handshakes for each test-case in a new line.
 * @param {number} n: the total number of Board of Directors of Acme
 * @returns {number} Print the number of handshakes for each test-case in a new line. 
 */

function handshake(n) {
  return (n * (n - 1) / 2);
}

let testCase;
testCase = 1; // => 0
testCase = 2; // => 1

console.log(handshake(testCase));

