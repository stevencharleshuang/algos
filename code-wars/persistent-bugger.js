/**
 * Persistent Bugger
 * https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
 * 
 * @function persistence
 * @description  takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
 * @param {number} num: a positive parameter
 * @returns {number} number of times you must multiple the digits until you reach a signle digit 
 */

function persistence(num) {
  let count = 0;

  const persist = (number) => {
    if (number.toString().length === 1) {
      return count;
    }

    count += 1;
    let tempNumArr = number.toString().split('');
    let tempNum = parseInt(tempNumArr[0]);

    for (let i = 1; i < tempNumArr.length; i += 1) {
      tempNum = tempNum * parseInt(tempNumArr[i]); 
    }
    
    return persist(tempNum);
  }

  if (num.toString().length === 1) {
    return count;
  }
  
  return persist(num);
}

console.log(persistence(39)); // => 3
console.log(persistence(4)); // => 0
console.log(persistence(25)); // => 2
console.log(persistence(999)); // => 4

/* 
Pseudo Code
  init a count to track the persistence to 0
  count digits by parsing to a string and then checking if length is greater than 1
  if yes, return count
  else return persist helper func
  If input is single digit?
  return 
*/