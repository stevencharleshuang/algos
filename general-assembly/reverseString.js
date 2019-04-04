/**
 * @function reverseString
 * @description Accepts a string and reverses the characters
 * @param {string} str: a string to reverse
 * @returns {string}
 */
const reverseString = (str) => {
  // return str.split('').reverse().join('');
  let revStrArr = [];
  str.split('').forEach(char => revStrArr.unshift(char));

  return revStrArr.join('');
};

module.exports = reverseString;