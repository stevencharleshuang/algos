let BigNumber = require('bignumber.js');
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

/* Vanilla Solution 
*/
// function taumBday(b, w, bc, wc, z) {
//   let lowestSpend = 0;
//   console.log(arguments);
//   if (bc > wc && (wc+z) < bc) {
//     lowestSpend = ((b * wc) + (b * z)) + (w * wc);
//     console.log('black convert to white', lowestSpend);
//   } else if (wc > bc && (bc+z) < wc) {
//     lowestSpend = ((w * bc) + (w * z)) + (b * bc);
//     console.log('white convert to black', lowestSpend);
//   } else {
//     lowestSpend = (b * bc) + (w * wc);
//     console.log('no conversion', lowestSpend);
//   }  

//   return lowestSpend;
// }

// function taumBday(b, w, bc, wc, z) {
//   [b, w, bc, wc, z] = [...arguments].map(arg => new BigNumber(arg));
//   let lowestSpend = 0;
  
//   if ((bc > wc) && ((wc.plus(z)) < bc)) {
//     lowestSpend = ((b.times(wc)).plus(b.times(z))).plus(w.times(wc));
//     console.log('black convert to white', lowestSpend);
//   } else if ((wc > bc) && ((bc.plus(z)) < wc)) {
//     lowestSpend = ((w.times(bc)).plus(w.times(z))).plus(b.times(bc));
//     console.log('white convert to black', lowestSpend);
//   } else {
//     lowestSpend = (b.times(bc)).plus(w.times(wc));
//     console.log('no conversion', lowestSpend);
//   }

//   return parseInt(lowestSpend.toFixed());
// }

function taumBday(b, w, bc, wc, z) {
  [b, w, bc, wc, z] = [...arguments].map(arg => new BigNumber(arg));
  bc = ((wc.plus(z)) < bc) ? wc.plus(z) : bc;
  wc = ((bc.plus(z)) < wc) ? bc.plus(z) : wc;

  return parseInt((b.times(bc)).plus((w.times(wc))).toFixed());
}

// adamxtokyo's solution
// function taumBday (b, w, bc, wc, z) {
//   [b, w, bc, wc, z] = [...arguments].map(x => new BigNumber(x));
//   let tbc = BigNumber.min( b.times(bc), b.times(wc).plus(b.times(z)) );
//   let twc = BigNumber.min( w.times(wc), w.times(bc).plus(w.times(z)) );
//   return parseInt(tbc.plus(twc).toFixed());
// }

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
// testCase = [3, 6, 9, 1, 1]; // => 12

// Similarly, we will buy w = 7 white gifts at their original price, wc = 2. 
// For black gifts, we will first buy white ones and color them to black, 
// so that their cost will be reduced to wc + z = 2 + 1 = 3. 
// So cost of buying all gifts will be: 7 * 3 + 7 * 2 = 35
// testCase = [7, 7, 4, 2, 1]; // => 35

// We will buy black gifts at their original price, bc = 1. 
// For white gifts, we will first black gifts worth bc = 1  unit and color them to white for z = 2 units. 
// The cost for white gifts is reduced to wc = bc + z = 2 + 1 = 3 units. 
// The cost of buying all gifts will be: 3 * 1 + 3 * 3 = 3 + 9 = 12
// testCase = [3, 3, 1, 9, 2]; // => 12

testCase = [ 384, 887, 2778, 6916, 7794 ]; // => 7201244
testCase = [ 336, 387, 493, 6650, 1422 ]; // => 906753
testCase = [ 363, 28, 8691, 60, 7764 ]; // => 2841792
testCase = [ 927, 541, 3427, 9173, 5737 ]; // => 8134553
// testCase = [ 212, 369, 2568, 6430, 5783 ]; // => 2917086
// testCase = [ 2, 3, 20, 60, 50 ]; // => 220
// testCase = [ 531, 863, 5124, 4068, 3136 ]; // => 6231528
// testCase = [ 930, 803, 4023, 3059, 3070 ]; // => 6197767
// testCase = [ 168, 394, 8457, 5012, 8043 ]; // => 3395504
// testCase = [ 230, 374, 4422, 4920, 3785 ]; // => 2857140
// testCase = [ 538, 199, 4325, 8316, 4371 ]; // => 3981734
testCase = [ 742407782, 90529439, 847666641, 8651519, 821801924 ]; // => 617318315833461267
// testCase = [ 142640749, 652432197, 701695848, 936714099, 324221606 ]; // => 711232858900355655
// testCase = [ 736418699, 754161925, 912285746, 841360803, 736841333 ]; // => 1306346564995590229
// testCase = [ 177076565, 651852957, 926160119, 137199984, 872396383 ]; // => 253435467783263923
// testCase = [ 232813954, 654376491, 933554781, 63130979, 441062505 ]; // => 158694707102490425
// testCase = [ 988402860, 283959645, 572488886, 802335530, 193057740 ]; // => 783234000390521730
// testCase = [ 571683259, 397259663, 136103531, 271866251, 405911181 ]; // => 185809605416820942
// testCase = [ 810421806, 414506999, 58343377, 512117653, 203737449 ]; // => 155917081637180036
// testCase = [ 235081335, 101052703, 957899374, 147367080, 942413506 ]; // => 240076105402801530
// testCase = [ 547257058, 324443644, 594266462, 325933528, 461643627 ]; // => 430963577188284828


let result = taumBday(...testCase);
console.log({ result });