/**
 * Counting Sort 2
 * https://www.hackerrank.com/challenges/countingsort2/problem
 * @function countingSort
 * @param {array} arr 
 */
// function countingSort(arr) {
//   let countArr = [];
//   let sortedArr = [];

//   for (let i = 0; i < 100; i += 1) {
//     countArr.push(0);
//   }

//   for (let i = 0; i < arr.length; i += 1) {
//     countArr[arr[i]] += 1;
//   }

//   for (let i = 0; i < countArr.length; i += 1) {
//     if (countArr[i] >= 1) {
//       let count = countArr[i];
//       while (count > 0) {
//         sortedArr.push(i);
//         count -= 1;
//       }
//     }
//   }
//   return sortedArr;
// }

// Elegant JS Solution
function countingSort(arr) {
  counter=new Array(arr.length).fill(0)
  result=[]
  for(let value of arr){
      counter[value]+=1
  }
  let index=0
  for(let value of counter){
      result.push(...Array(value).fill(index))
  index+=1
  }
      
  return result
}

let testCase;

testCase = [ 63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67, 99, 12, 83, 89, 80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44, 3, 89, 30, 27, 79, 46, 96, 27, 32, 18, 21, 92, 69, 81, 40, 40, 34, 68, 78, 24, 87, 42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43, 3, 70, 95, 33, 46, 44, 9, 69, 48, 33, 60, 65, 16, 82, 67, 61, 32, 21, 79, 75, 75, 13, 87, 70, 33, ];
// testCase = [ 3, 1, 2, 2, 1 ]; // => [ 1, 1, 2, 2, 3 ]

console.log(countingSort(testCase));