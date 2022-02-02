// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// First Solution
// function palindrome(str) {
//   const reversedStr = [...str].reverse().join('');
//   if (str === reversedStr) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Second Solution

// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');
//   return str === reversed;
// }

// Third Solution
function palindrome(str) {
  return [...str].every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
