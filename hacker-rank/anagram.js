/**
 * Anagram
 * https://www.hackerrank.com/challenges/anagram/problem
 * 
 * @description It should return the minimum number of characters to change to make the words anagrams, or -1 if it's not possible.
 * @param {string} s: a string
 * @returns {number} Prints an integer representing the minimum number of changes required to make an anagram. Print -1 if it is not possible.
 */

function anagram(s) {
  if (s.length % 2 !== 0) {
    return -1;
  }

  let count = 0;
  let count1 = 0;
  let count2 = 0;
  let sub1 = s.slice(0, s.length / 2);
  let sub2 = s.slice(s.length / 2);
  let sub1Hash = {};
  let sub2Hash = {};
  
  for (let i = 0; i < s.length / 2; i += 1) {
    sub1Hash[sub1[i]] ? sub1Hash[sub1[i]] += 1 : sub1Hash[sub1[i]] = 1;
    sub2Hash[sub2[i]] ? sub2Hash[sub2[i]] += 1 : sub2Hash[sub2[i]] = 1;
  }

  for (let char in sub1Hash) {
    let sub2Keys = Object.keys(sub2Hash);
    if (!sub2Keys.find((el) => el === char)) {
      count1 += sub1Hash[char];
    } else if (sub1Hash[char] !== sub2Hash[char] && sub1Hash[char] > sub2Hash[char]) {
      count1 += Math.abs(sub1Hash[char] - sub2Hash[char]);
    }
  }

  for (let char in sub2Hash) {
    let sub1Keys = Object.keys(sub1Hash);
    if (!sub1Keys.find((el) => el === char)) {
      count2 += sub2Hash[char];
    } else if (sub2Hash[char] !== sub1Hash[char] && sub2Hash[char] > sub1Hash[char]) {
      count2 += Math.abs(sub2Hash[char] - sub1Hash[char]);
    }
  }

  console.log({ count1, count2, sub1, sub2, sub1Hash, sub2Hash });
  return count1 < count2 ? count1 : count2;
}

let testCase;
testCase = 'asdfjoieufoa'; // => 3
// testCase = 'fdhlvosfpafhalll'; // => 5
// testCase = 'mvdalvkiopaufl'; // => 5
// testCase = 'aaabbb'; // -> 3
// testCase = 'ab'; // -> 1
// testCase = 'abc'; // -> -1
// testCase = 'mnop'; // -> 2
// testCase = 'xyyx'; // -> 0
testCase = 'xaxbbbxx'; // -> 1

console.log(anagram(testCase));

/* Pseudo Code 
  if string.length is odd, then impossible
    return -1
  split the string to two sub strings  
  memoize count

  iterate the strings
    if sub1[i] doesn't equal sub2[i] 
      count ++
  
  return count

*/

