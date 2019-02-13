/**
 * Cavity Map
 * https://www.hackerrank.com/challenges/cavity-map/problem
 * 
 * @description should return an array of strings, each representing a line of the completed map.
 * @param {array} grid: an array of strings, each representing a row of the grid
 * @returns {array} Output n lines denoting the resulting map. Each cavity should be replaced with the character X.
 */

function cavityMap(grid) {
  let splitGrid = grid.slice().map(str => str.split(''));
  let newGrid = splitGrid;
  
  for (let i = 1; i < grid.length - 1; i += 1) {
    for (let j = 1; j < grid[i].length - 1; j += 1) {
      let currentCell = parseInt(grid[i][j]);
      let 
        n = parseInt(grid[i - 1][j]), 
        s = parseInt(grid[i + 1][j]), 
        e = parseInt(grid[i][j + 1]), 
        w = parseInt(grid[i][j - 1]);

      if (currentCell > n 
        && currentCell > s 
        && currentCell > e 
        && currentCell > w) {
        newGrid[i][j] = 'X';
      }
    }
  }

  newGrid = newGrid.slice().map(str => str.join(''));
  return newGrid;
}

let testCase;
testCase = ['989',
            '191',
            '111']; // => [ 989, 
                         // 1X1, 
                         // 111 ]
testCase = ['1112',
            '1912',
            '1892',
            '1234']; // => [ 1112,
                          // 1X12,
                          // 18X2,
                          // 1234 ]

console.log(cavityMap(testCase));

/* Pseudo Code
cavity = not on the border of the map && cells N, E, S, W are less than

grid[i] will iterate each string 
  need to split() the strings to an arr
  can init at 1 and end loop at grid.length-1 to ignore border strings
  grid[j] will iterate each char of each string
    can init at 1 and end at grid[i].length-1 to ignore border char
      will have to parseInt(each char of each string) to determine values
*/

