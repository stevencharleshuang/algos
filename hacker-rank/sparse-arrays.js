/**
 * Sparse Arrays
 * https://www.hackerrank.com/challenges/sparse-arrays/problem
 * 
 * @function matchingStrings
 * @description There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings.
 * @param {array} strings: an array of strings to search
 * @param {array} queries: an array of query strings
 * @returns {array} Return an integer array of the results of all queries in order.
 */

function matchingStrings(strings, queries) {
  let resultsArr = [];
  let stringsHash = {};

  strings.forEach(string => stringsHash[string] ? stringsHash[string] += 1 : stringsHash[string] = 1);

  queries.forEach(query => {
    stringsHash[query] ? resultsArr.push(stringsHash[query]) : resultsArr.push(0);
  });

  return resultsArr;
}

let testCase;

testCase = [ [ 'aba', 'baba', 'aba', 'xzxb' ], [ 'aba', 'xzxb', 'ab' ] ]; // => [ 2, 1, 0 ]

console.log(matchingStrings(...testCase));

/* Pseudo Code
Create an empty arr ${resultsArr} to store the resulting counts of each query
Create a hash to count number of occurrences of each string from strings arr
iterate through queries arr and check to see if query exists in hash
  if yes: push count to ${resultsArr}
  if no: push 0 to ${resultsArr}
return ${resultsArr}
*/

