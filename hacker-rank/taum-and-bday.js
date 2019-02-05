/**
 * Taum and B'day
 * https://www.hackerrank.com/challenges/taum-and-bday/problem
 * 
 * @desc It should return the minimal cost of obtaining the desired gifts.
 * 
 * @param {number} b: The number of black gifts
 * @param {number} w: The number of white gifts
 * @param {number} bc: The cost of a black gift
 * @param {number} wc: The cost of a white gift
 * @param {number} z: The cost to convert one color gift to the other color
 * 
 * @return {number} The minimum amount of units Taum needs to spend on gifts.
 */

function taumBday(b, w, bc, wc, z) {

}

let testCase;
// Since black gifts cost the same as white, there is no benefit to converting the gifts. 
// Taum will have to buy each gift for 1 unit. 
// The cost of buying all gifts will be: b * bc + w * wc = 10 * 1 + 10 * 1 = 20
testCase = [10, 10, 1, 1, 1]; // => 20 

// Again, we can't decrease the cost of black or white gifts by converting colors. {z} is too high. 
// We will buy gifts at their original prices, so the cost of buying all gifts will be: 
// b * bc + w * wc = 5 * 2 + 9 * 3 = 10 + 27 = 37
testCase = [5, 9, 2, 3, 4]; // => 37

// Since bc < bw + z, we will buy b + w = 3 + 6 = 9 white gifts at their original price of 1. 
// b = 3 of the gifts must be black, and the cost per conversion, z = 1. 
// Total cost is 9 * 1 + 3 * 1 = 12
testCase = [3, 6, 9, 1, 1]; // => 12

// Similarly, we will buy w = 7 white gifts at their original price, wc = 2. 
// For black gifts, we will first buy white ones and color them to black, 
// so that their cost will be reduced to wc + z = 2 + 1 = 3. 
// So cost of buying all gifts will be: 7 * 3 + 7 * 2 = 35
testCase = [7, 7, 4, 2, 1]; // => 35

// We will buy black gifts at their original price, bc = 1. 
// For white gifts, we will first black gifts worth bc = 1  unit and color them to white for z = 2 units. 
// The cost for white gifts is reduced to wc = bc + z = 2 + 1 = 3 units. 
// The cost of buying all gifts will be: 3 * 1 + 3 * 3 = 3 + 9 = 12
testCase = [3, 3, 1, 9, 2]; // => 12

let result = taumBday(...testCase);
console.log({ result });