/**
 * ACM ICPC Team
 * https://www.hackerrank.com/challenges/acm-icpc-team/problem
 * 
 * @description It should return an integer array with two elements: the maximum number of topics any team can know and the number of teams that can be formed that know that maximum number of topics.
 * @param {string} topic: a string of binary digits
 * @returns {array} The maximum number of topics a 2-person team can known. the number of ways to form a 2-person team that knows maximum number of topics
 */

function acmTeam(topic) {
  let maxTopics = 0, maxTeams = 0;
  let optimum = []
  let splitStr = topic.slice().map(str => str.split(''));
  let count = 1;

  for (let i = 0; i < splitStr.length-1; i += 1) {
    let tempMaxTopics;
    let maxTopicsChanged = false;
    
    for (let j = count; j < splitStr.length; j += 1) {
      tempMaxTopics = 0;

      for (let k = 0; k < splitStr[0].length; k += 1) {
  
        if (splitStr[i][k] === '1' || splitStr[j][k] === '1') {
          tempMaxTopics += 1;
        }
      }

      if (tempMaxTopics > maxTopics) {
        maxTopics = tempMaxTopics;
        maxTeams += 1;
        maxTopicsChanged = true;
      } else if (tempMaxTopics === maxTopics) {
        maxTeams += 1;
      }

      if (maxTopicsChanged === true) {
        maxTeams = 0;
        maxTeams += 1;
        maxTopicsChanged = false;
      }
    }

    count += 1;
  }

  optimum.push(maxTopics, maxTeams);

  return optimum;
}

let testCase;
testCase = [ '10101', '11110', '00010' ]; // => [ 5, 1 ]
testCase = [ '10101', '11100', '11010', '00101' ]; // => [ 5, 2 ]
testCase = [ '11101', '10101', '11001', '10111', '10000', '01110' ]; // => [ 5, 6 ]

let result = acmTeam(testCase);
console.log({ result });

/* Pseudo Code
  Track max number of topics possible
  Track max number of teams able to know max number of topics  
  Split up the input array of binary strings into subarrays of string digits

  Return array of [ max number of topics, max number of teams ]
*/

