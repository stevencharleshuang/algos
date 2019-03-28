/**
 * Halloween Sale
 * https://www.hackerrank.com/challenges/halloween-sale/problem
 * 
 * @function howManyGames
 * @param {number} p: Initial price 
 * @param {number} d: Discount after initial
 * @param {number} m: Final price
 * @param {number} s: Amount in mist wallet to spend
 * @returns {number} The number of games bought
 */

function howManyGames(p, d, m, s) {
  let gamesBought = 0;

  if (p > s) {
    return gamesBought;
  }

  let totalSpent = p;
  let currentCost = p;
  gamesBought += 1;

  while (totalSpent < s) {
    currentCost - d > m ? currentCost -= d : currentCost = m;
      
    totalSpent += currentCost;
    
    if (totalSpent <= s) {
      gamesBought += 1;
    }

    // console.log({ gamesBought, totalSpent, currentCost });
  }

  return gamesBought;
}

let testCase;

testCase = [ 20, 3, 6, 80 ]; // => 6
// testCase = [ 20, 3, 6, 85 ]; // => 7
testCase = [ 16, 2, 1, 9981 ]; // => 9917
// testCase = [ 1, 100, 1, 9777 ]; // => 9777
// testCase = [ 1, 100, 1, 10 ]; // => 10

console.log(howManyGames(...testCase));

/* Pseudo Code
if p < s return 0
store a var totalspent
store a var gamesBought

first purchase = p
current cost = p
if (current cost - d > m) { current cost = p - d } else { current cost = m }


*/