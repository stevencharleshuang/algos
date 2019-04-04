const isPalindrome = require('./isPalindrome.js');
const reverseString = require('./reverseString');
const titleCase = require('./titleCase');
const twoSum = require('./twoSum');

let testCase;
// isPalindrome Test Cases
testCase = 'aba'; // => true
testCase = 'abbccba'; // => false
// testCase = 'aabbaa'; // => true
// testCase = 'racecar'; // => true

console.log('isPalindrome: ', isPalindrome(testCase));

// reverseString Test Cases
testCase = 'funnybunny'; // => 'ynnubynnuf'
testCase = 'Funny Bunny'; // => 'ynnuB ynnuF'

console.log('reverseString: ', reverseString(testCase));

// twoSum Test Cases
testCase = [[1,2,3,4,5], 9]; // => [4, 5]
testCase = [[3,7,2,7,8,1,2], 9]; // => [7, 2]
testCase = [[1,2,3,4,5], 10]; // => 'No pairs'

console.log('twoSum:', twoSum(...testCase));

// titleCase TestCases
testCase = 'title'; // => 'Title'
testCase = 'tiTLe'; // => 'Title'
testCase = 'tItLe caSe mE'; // => 'Title Case Me'

console.log('titleCase: ', titleCase(testCase));