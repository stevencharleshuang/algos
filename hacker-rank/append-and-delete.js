/**
 * Append and Delete
 * https://www.hackerrank.com/challenges/append-and-delete/problem
 * 
 * @description It should return a string, either Yes or No.
 * @param s: the initial string
 * @param t: the desired string
 * @param k: an integer that represents the number of operations
 * @returns {string} Print Yes if you can obtain string t by performing exactly k operations on s. Otherwise, print No.
 */
function appendAndDelete(s, t, k) {
  let count = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] !== t[i]) {
      count += s.slice(i).length + t.slice(i).length;
      break;
    }
  }

  console.log(count);

  if (count > k) {
    return 'No';
  } else {
    return 'Yes';
  }

}

let testCase;
testCase = [ 'hackerhappy', 'hackerrank', 9 ]; // => Yes
// testCase = [ 'aba', 'aba', 7 ]; // => Yes
// testCase = [ 'ashley', 'ash', 2 ]; // => No
// testCase = [ 'qwerasdf', 'qwerbsdf', 6 ]; // => No
testCase = [ 'y', 'yu', 2 ]; // => No
testCase = [ 'abcd', 'abcdert', 10 ]; // => No

let result = appendAndDelete(...testCase);
console.log(result);

/* Pseudo Code 

*/