function encrypt(text, n) {
  if (text === '' || text === null) return text;
  if (n < 1) return text;
  
  let eStr1 = '';
  let eStr2 = '';

  for (let i = 0; i < text.length; i += 1) {
    if (i % 2 === 1) {
      eStr1 += text[i];
    } else {
      eStr2 += text[i];
    }
  }

  if (n > 1) {
    let tempEStr = eStr1 + eStr2;
    return encrypt(tempEStr, n - 1);
  } 
  return eStr1 += eStr2;
}

function decrypt(encryptedText, n) {
  if (encryptedText === '' || encryptedText === null) return encryptedText;
  if (n < 1) return encryptedText;

  let half = Math.floor(encryptedText.length / 2);
  let tempStr1 = encryptedText.slice(0, half);
  let tempStr2 = encryptedText.slice(half);
  let dStr = '';

  for (let i = 0; i < Math.ceil(encryptedText.length / 2); i += 1) {
    if (tempStr1[i] === undefined) {
      dStr += tempStr2[i];
      break;
    }
    dStr += tempStr2[i];
    dStr += tempStr1[i];
  }

  if (n > 1) {
    return decrypt(dStr, n - 1);
  } 
  return dStr;
}

console.log(encrypt('', 1)); // => ''
console.log(encrypt(null, 1)); // => null
console.log(encrypt('This is a test!', 0)); // => 'This is a test!'
console.log(encrypt("This is a test!", 1)); // -> "hsi  etTi sats!"
console.log(encrypt("This is a test!", 2)); // -> "hsi  etTi sats!" -> "s eT ashi tist!"
console.log(encrypt("Here it is", 1)); // => eei sHr ti
console.log(encrypt("Here it is", 2)); // => e H ieisrt
console.log(decrypt("hsi  etTi sats!", 1)); // => 'This is a test!'
console.log(decrypt("s eT ashi tist!", 2)); // => 'This is a test!'
console.log(decrypt("eei sHr ti", 1)); // => 'This is a test!'
console.log(decrypt("e H ieisrt", 2)); // => 'This is a test!'

/* Pseudo Code 
Encrypt
Iterate
Concat
If n > 1, n -= 1, recurse

Decrypt
*/

/* Better Solution 1: stackcats 
function encrypt(text, n) {
  console.log(text, n);
  if (!text || n <= 0) return text; 
  while (n--) {
    let ans = '';
    for (let i = 1; i < text.length; i += 2) {
      ans += text[i];
    }
    for (let i = 0; i < text.length; i += 2) {
      ans += text[i];
    }
    text = ans;
  }
  return text;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;
  const ans = new Array(encryptedText.length);
  while (n--) {
    let j = 0;
    for (let i = 1; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    for (let i = 0; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    encryptedText = ans.join('');
  }
  return encryptedText;
}
*/

/* Better Solution 2: ignovak
function encrypt(text, n) {
  for (let i = 0; i < n; i++) {
    text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1') 
  }
  return text
}

function decrypt(text, n) {
  let l = text && text.length / 2 | 0
  for (let i = 0; i < n; i++) {
    text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ''))
  }
  return text
}
*/