/**
 * 
 * @param {number} n 
 * @param {array} arr 
 */

function insertionSort2(n, arr) {
  let arrSort = arr.slice();
  for (let i = 1; i < arrSort.length; i += 1) {
    let temp = arrSort[i];
    let prev = arrSort[i - 1];
    let tempI = i;

    while (temp < arrSort[tempI - 1]) {
      arrSort[tempI] = prev;
      arrSort[tempI - 1] = temp;
      tempI -= 1;
      temp = arrSort[tempI];
      prev = arrSort[tempI - 1];
    }
    console.log(arrSort.join(' '));
  }
}

let testCase;

testCase = [ 1, 4, 3, 5, 6, 2 ]; // => 
  // -> 1 4 3 5 6 2 
  // -> 1 3 4 5 6 2 
  // -> 1 3 4 5 6 2 
  // -> 1 3 4 5 6 2 
  // -> 1 2 3 4 5 6 

testCase = [ 3, 4, 7, 5, 6, 2, 1 ]; // => 
  // -> 3 4 7 5 6 2 1
  // -> 3 4 7 5 6 2 1
  // -> 3 4 5 7 6 2 1
  // -> 3 4 5 6 7 2 1
  // -> 2 3 4 5 6 7 1
  // -> 1 2 3 4 5 6 7

console.log(insertionSort2(testCase.length, testCase));