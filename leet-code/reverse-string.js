/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
  let tempIdx = s.length - 1;

  for (let i = 0; i < s.length / 2; i++) {
    const tempChar = s[tempIdx];

    s[tempIdx] = s[i];

    s[i] = tempChar;

    tempIdx--;
  }

  console.log({ s });

  return s;
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));

module.exports = reverseString;
