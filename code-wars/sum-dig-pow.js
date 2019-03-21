/**
 * Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
 * https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript
 * 
 * @function sumDigPow
 * @description 
 *  The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.
 *  In effect: 89 = 8^1 + 9^2
 *  The next number in having this property is 135.
 *  See this property again: 135 = 1^1 + 3^2 + 5^3
 *  We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) 
 * @param {number} a: the min of the range
 * @param {number} b: the max of the range
 * @returns {array} Outputs a list of the sorted numbers in the range that fulfills the property described above. If there are no numbers of this kind in the range [a, b] the function should output an empty list.
 */

function sumDigPow(a, b) {
  let numArr = [];

  for (let i = a; i < b; i += 1) {
    let numStr = i.toString();

    if (numStr.length === 1) {
      numArr.push(i);
    } else {
      let tempNum = 0;
      let tempPow = 1;

      numStr.split('').forEach(num => {
        tempNum += (Math.pow(parseInt(num), tempPow));
        tempPow += 1;
      });

      if (tempNum === i) {
        numArr.push(i);
      }
    }
  }

  return numArr;
}

console.log(sumDigPow(1, 10)); // => [1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(sumDigPow(1, 100)); // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
console.log(sumDigPow(10, 100)); // =>  [89])
console.log(sumDigPow(90, 100)); // => [])
console.log(sumDigPow(90, 150)); // => [135])
console.log(sumDigPow(50, 150)); // => [89, 135])
console.log(sumDigPow(10, 150)); // => [89, 135])

/* Top Submission
function sumDigPow(a, b) {
  var ans = [];
  while(a <= b){
    if(a.toString().split('').reduce((x,y,i)=>x + +y ** (i + 1),0) == a)
      ans.push(a);
    a++;
  }
  return ans;
}
*/