/**
 * Longest Substring
 * https://brilliant.org/practice/strings-intermediate/?subtopic=types-and-data-structures&chapter=strings
 * 
 * @function longestSubstring
 * @description accepts a string and determines the length of the longest substring that doesn't repeat letters
 * @param {string} s: a string to analyze
 * @returns {number} subLength: the length of the longest substring with unique characters
 */
const longestSubstring = (s) => {
  let tempArr = [];
  let longestSubSLen = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (tempArr.indexOf(s[i]) === -1) {
      tempArr.push(s[i]);
    } else {  
      tempArr = [];
      tempArr.push(s[i]);      
    }

    if (tempArr.length > longestSubSLen) {
      longestSubSLen = tempArr.length;
    }
  
    console.log({ tempArr, longestSubSLen });
  }

  return longestSubSLen;
}

let testCase;

testCase = 'brilliant'; // => liant => 5
testCase = 'xhbeqirxwobpuhkojsijumtfhsvyhyznuvzooiqxkvllfrpfnweiucjilnwixlucopomethoczbujltfycvbvvhuzstnmjcqgqchrktvsinunbopmgbwyegwkysmcxsdlhsbtcczfvcfvrbsqsxliyxzgzwvwgvvvgxgqyrbfetiwyqyircnysvcpfywdihnkjhwjsww'; // => 13
console.log(longestSubstring(testCase));