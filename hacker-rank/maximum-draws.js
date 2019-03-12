/**
 * Maximum Draws
 * https://www.hackerrank.com/challenges/maximum-draws/problem
 * 
 * @function maximumDraws
 * @description Jim is off to a party and is searching for a matching pair of socks. His drawer is filled with socks, each pair of a different color. In its worst case scenario, how many socks (x) should Jim remove from his drawer until he finds a matching pair?
 * @param {number} n: an integer which indicates the total pairs of socks present in the drawer.
 * @returns {number} Print the number of Draws (x) Jim makes in the worst case scenario.
 */

function maximumDraws(n) {
  return n + 1;
}

let testCase;
testCase = 1; // => 2
testCase = 2; // => 3 

console.log(maximumDraws(testCase));