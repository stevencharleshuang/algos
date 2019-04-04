/**
 * @function titleCase
 * @description Accepts a string and converts the cpialization to title case
 * @param {string} str: A string to apply the style
 * @returns {string} Returns the capitalized string
 */
function titleCase(str) {
  // Solution for one word
  /*
  return str.slice(0, 1).toUpperCase().concat(str.slice(1).toLowerCase());
  */
  
  // Solution for multiple words
  return (
    str
      .split(' ')
      .map(
        word => word
          .slice(0, 1)
          .toUpperCase()
          .concat(
            word
              .slice(1)
              .toLowerCase()))
      .join(' '));
};

module.exports = titleCase;