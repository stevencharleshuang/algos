/**
 * Electronics Shop
 * https://www.hackerrank.com/challenges/electronics-shop/problem
 * 
 * It should return the maximum total price for the two items within Monica's 
 * budget, or -1 if she cannot afford both items.
 * 
 * @param { array } keyboards: an array of integers representing keyboard prices
 * @param { array } drives: an array of integers representing drive prices
 * @param { number } b: the units of currency in Monica's budget
 * 
 * @return {number} Prints a single integer denoting the amount of money Monica 
 * will spend. If she doesn't have enough money to buy one keyboard and one USB 
 * drive, print -1 instead.
 */

function getMoneySpent(keyboards, drives, b) {
  // Decs
  let moneySpent = 0;
  let tempHi = 0;
  let tempLo = b;
  
  // Iterate
  keyboards.forEach(keyboard => {
    drives.forEach(drive => {
      let tempPrice = keyboard + drive;
      if (tempPrice > tempHi && tempPrice <= b) {
        tempHi = tempPrice;
      }
      if (tempPrice < tempLo) {
        tempLo = tempPrice;
      }
    });
  });

  // Returning
  moneySpent = tempHi
  if (tempLo >= b) {
    moneySpent = -1;
  }
  console.log({ moneySpent });
  // console.log(moneySpent);
  return moneySpent;
}

let args = [ [ 3, 1 ], [ 5, 2, 8 ], 10 ]; // => 9
// args = [ [ 4 ], [ 5 ], 5 ]; // => -1
// args = [ [ 40, 50, 60 ], [ 5, 8 , 12 ], 60 ]; // => 58
let result = getMoneySpent(...args);
console.log(result);
/* PseudoCode
Need to memoize a current top
Need to iterate through each of the two arrs
  nest loops to get each combo
  if combo is greater than tempHi, memoize
After the loops complete, moneySpent = tempHi
*/

