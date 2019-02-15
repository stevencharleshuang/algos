/**
 * Flatland Space Stations
 * https://www.hackerrank.com/challenges/flatland-space-stations/problem
 * 
 * @description It should return an integer that represents the maximum distance any city is from a space station.
 * @param {number} n: the number of cities
 * @param {array} c: an integer array that contains the indices of cities with a space station, 1-based indexing
 * @returns {number} Prints an integer denoting the maximum distance that an astronaut in a Flatland city would need to travel to reach the nearest space station.
 */

// function flatlandSpaceStations(n, c) {
//   if (n === c.length) {
//     return 0;
//   }
//   // Track maxDistance
//   let maxDistance = 0;

//   // Iterate the cities 
//   for (let i = 0; i <= n; i += 1) {
//     // For every city, init the tempMinDistance to n
//     let tempMinDistance = n;
//     // Iterate the array of space station city indices
//     for (let j = 0; j < c.length; j += 1) {
//       // Memoize the temporary Distance for each array index 
//       let tempDistance = Math.abs((i - 1) - c[j]); 
//       // If the tempDistance is less than the tempMinDistance
//       // Make the tempMinDistance the tempDistance
//       if (tempDistance < tempMinDistance) {
//         console.log({ i, maxDistance, tempMinDistance, tempDistance }, c[j]);
//         tempMinDistance = tempDistance;
//       }
//     }
    
//     // If the tempMinDistance is greater than the current maxDistance, 
//     // set the maxDistance to the tempMinDistance
//     if (tempMinDistance > maxDistance) {
//       maxDistance = tempMinDistance;
//     } 
//   }

//   return maxDistance;
// }

/* HR Discussions Solution */
function flatlandSpaceStations(n, c) {
  c.sort((a, b) => a - b);
  let maxDistance = c[0];
  for (let i = 1; i < c.length; i += 1) {
    let distance = Math.floor((c[i] - c[i - 1]) / 2);
    if (maxDistance < distance) maxDistance = distance;
  }
  let lastGap = (n - 1) - c[c.length - 1];
  return (lastGap < maxDistance) ? maxDistance : lastGap;
  // console.log({ c });
}

let testCase;
testCase = [ 5, [ 0, 4 ] ]; // => 2
testCase = [ 20, [ 5, 13, 1, 11, 10, 6 ] ]; // => 6
testCase = [ 95, [ 68, 81, 46, 54, 30, 11, 19, 23, 22, 12, 38, 91, 48, 75, 26, 86, 29, 83, 62 ] ]; // => 11
// testCase = [ 100, [ 99 ] ]; // => 99
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

