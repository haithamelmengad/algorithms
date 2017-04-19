"use strict";
// isPalindrome(). Write a function that takes a string and determines if the
// string is a palindrome. A palindrome is a word, phrase, or sequence that reads
// the same backward as forward. Examples: racecar, madam, etc…
// ex. isPalindrome('') -> true
// ex. isPalindrome('a') -> true
// ex. isPalindrome('xx') -> true
// ex. isPalindrome('abba') -> true
// ex. isPalindrome('racecar') -> true
// ex. isPalindrome('ab') -> false
// ex. isPalindrome('abc') -> false
// ex. isPalindrome('raccarx') -> false
// ex. isPalindrome('racecarx') -> false
function isPalindrome(str) {
  for (var i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
