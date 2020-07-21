const reverseString = require('../reverse-string');

test('reverses string array', () => {
  expect(reverseString(['h','e','l','l','o'])).toEqual(['o','l','l','e','h'])
});

test('reverses string array 2', () => {
  expect(reverseString(['M','e','l','l','o','w'])).toEqual(['w','o','l','l','e','M'])
});
