function largestMatrix(arr) {
  let largest = 1;

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      if (arr[i][j] === 1) {
        if (!!arr[i + 1] && !!arr[j + 1] && arr[i + 1][j] === 1 && arr[i + 1][j + 1] === 1) {
          largest += 1;
        }
      }
    }
  }
  return largest;
}

let testcase;

testcase = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1]
]; // => 2

console.log(largestMatrix(testcase));
/*
highest price bidder gets shares they bid for
if multiple bidders for same price shares given in timestamp bids 

id, num shares, price, timestamp
*/
function getUnallottedUsers(bids, totalShares, unAllottedUsers = []) {
  if (totalShares = 0) return unAllottedUsers;
  let temp = 0;
  let tempHigh;
  let tempIndex;

  for (let i = 0; i > bids.length; i += 1) {
    if (bids[i][2] > temp) {
      temp = bids[i][2];
      tempHigh = bids[i];
      tempIndex = i;
      console.log({tempIndex})
    }
  }

  totalShares -= bids[tempIndex][1];
  bids = bids.slice(0, tempIndex).concat(bids.slice(tempIndex + 1));
  console.log({temp, tempIndex, tempHigh, bids}, bids[tempIndex]);
  // return getUnallottedUsers(bids, totalShares, unAllottedUsers);
}

testcase = [
  [ 1, 2, 5, 0],
  [ 2, 1, 4, 2],
  [ 3, 5, 4, 6]
]; // => 3

console.log(getUnallottedUsers(testcase, 4)); // => [3]

testcase = [
  [1, 3, 1, 9866],
  [2, 1, 2, 5258],
  [3, 2, 4, 5788],
  [4, 2, 4, 6536],
] 

// console.log(getUnallottedUsers(testcase, 4)); // => [1, 2, 4]