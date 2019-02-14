/**
 * Flatland Space Stations
 * https://www.hackerrank.com/challenges/flatland-space-stations/problem
 * 
 * @description It should return an integer that represents the maximum distance any city is from a space station.
 * @param {number} n: the number of cities
 * @param {array} c: an integer array that contains the indices of cities with a space station, 1-based indexing
 * @returns {number} Prints an integer denoting the maximum distance that an astronaut in a Flatland city would need to travel to reach the nearest space station.
 */

function flatlandSpaceStations(n, c) {
  if (n === c.length) {
    return 0;
  }

  let maxDistance = 0;

  for (let i = 0; i < n - 1; i += 1) {
    let tempMinDistance = n;

    for (let j = 0; j < c.length; j += 1) {
      let tempDistance = Math.abs(i - c[j]); 

      if (tempDistance < tempMinDistance) {
        tempMinDistance = tempDistance;
      }
    }

    if (tempMinDistance > maxDistance) {
      maxDistance = tempMinDistance;
    } 
  }

  return maxDistance;
}

let testCase;
testCase = [ 5, [ 0, 4 ] ]; // => 2
testCase = [ 20, [ 5, 13, 1, 11, 10, 6 ] ]; // => 6
// testCase = [ 6, [ 0, 1, 2, 4, 3, 5 ] ]; // => 0

console.log(flatlandSpaceStations(...testCase));

/* Pseudo Code 
  If n === c.length return 0
  n is the num of cities
  c is an array that names the cities with stations by index
  for loop, iterate through n to get the maxDistance
    memoize a tempMaxDist
    iterate through c
    get abs diff of n and c[i]
      memoize whichever is less
    if tempMaxDist is greater than maxDistance, update it else move on
*/

