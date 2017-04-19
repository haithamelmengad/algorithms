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

describe("isPalindrome()", function() {
  it("isPalindrome('') -> true", function() {
    expect(isPalindrome('') ).toBe(true);
  });
  it("isPalindrome('a') -> true", function() {
    expect(isPalindrome('a') ).toBe(true);
  });
  it("isPalindrome('xx') -> true", function() {
    expect(isPalindrome('xx') ).toBe(true);
  });
  it("isPalindrome('abba') -> true", function() {
    expect(isPalindrome('abba') ).toBe(true);
  });
  it("isPalindrome('racecar') -> true", function() {
    expect(isPalindrome('racecar') ).toBe(true);
  });
  it("isPalindrome('ab') -> false", function() {
    expect(isPalindrome('ab') ).toBe(false);
  });
  it("isPalindrome('abc') -> false", function() {
    expect(isPalindrome('abc') ).toBe(false);
  });
  it("isPalindrome('raccarx') -> false", function() {
    expect(isPalindrome('raccarx') ).toBe(false);
  });
  it("isPalindrome('racecarx') -> false", function() {
    expect(isPalindrome('racecarx') ).toBe(false);
  });
});
