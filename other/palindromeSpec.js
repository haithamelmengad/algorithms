"use strict";
var isPalindrome = require('./palindrome');

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
