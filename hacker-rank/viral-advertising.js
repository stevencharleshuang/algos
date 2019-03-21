/**
 * Viral Advertising
 * https://www.hackerrank.com/challenges/strange-advertising/problem
 * 
 * @function viralAdvertising
 * @description It should return the cumulative number of people who have liked the ad at a given time.
 * @param {number} n: denoting a number of days
 * @returns Print the number of people who liked the advertisement during the first n days.
 */

function viralAdvertising(n) {
  let shared = 5;
  let cumulative = 2;

  for (let i = 1; i < n; i += 1) {
    shared = Math.floor(shared / 2) * 3;
    cumulative += Math.floor(shared / 2);
  }
  
  return cumulative;
}

function viralAdvertising(n) {
  let shared = 5;
  let cumulative = 2;

  for (let i = 1; i < n; i += 1) {
    shared = Math.floor(shared / 2) * 3;
    cumulative += Math.floor(shared / 2);
  }

  return cumulative;
}

let testCase;

testCase = 3; // => 9
testCase = 4; // => 15

console.log(viralAdvertising(testCase));

/* Pseudo Code 
floor(5/2) * 3
*/