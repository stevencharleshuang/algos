/**
 * Chocolate Feast
 * https://www.hackerrank.com/challenges/chocolate-feast/problem
 * 
 * @description It must return the number of chocolates Bobby can eat after taking full advantage of the promotion
 * @param n: an integer representing Bobby's initial amount of money
 * @param c: an integer representing the cost of a chocolate bar
 * @param m: an integer representing the number of wrappers he can turn in for a free bar
 * @returns the total number of chocolates Bobby eats
 */

function chocolateFeast(n, c, m) {
  let numBars = Math.floor(n / c);
  let numWrappers = numBars;

  while (numWrappers >= m) {
    let tempBars = Math.floor(numWrappers / m); 
    numBars += tempBars;
    numWrappers -= (tempBars * m);
    numWrappers += tempBars;
  }
  
  return numBars;
}

let testCase;
testCase = [ 15, 3, 2 ]; // > 5 + 2 + 1 + 1 => 9 
testCase = [ 10, 2, 5 ]; // => 6
testCase = [ 12, 4, 4 ]; // => 3
testCase = [ 6, 2, 2 ]; // => 5

let result = chocolateFeast(...testCase);
console.log(result);

/* Pseudocode
Memoize 
  number of choclates bobby gets
  init at money divided by cost per chocolate
  number of wrappers he gets from the chocolates he eats
while Bobby has wrappers to convert
convert the wrappers


*/

