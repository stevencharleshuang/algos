/**
 * @function isPalindrome
 * @description Checks if a string is a palindrome and returns true or false
 * @param {string} str: a string to analyze
 * @returns {Boolean} 
 */
const isPalindrome = (str) => {
  let mid = Math.floor(str.length / 2);
  
  for (let i = 0; i < mid; i += 1) {
    if (str[i] !== str[str.length - (i + 1)]) {
      return false;
    }
  }

  return true;
};

module.exports = isPalindrome;