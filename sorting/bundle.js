(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var sortedArray = {};

// Write a function that takes an array, and returns true if and only if
// the array is already sorted in increasing order.
//
// ex. sortedArray.isSorted([]) -> true
// ex. sortedArray.isSorted([1]) -> true
// ex. sortedArray.isSorted([-1]) -> true
// ex. sortedArray.isSorted([0, 1]) -> true
// ex. sortedArray.isSorted([0, 999]) -> true
// ex. sortedArray.isSorted([-12, 2, 3, 6, 10]) -> true
// ex. sortedArray.isSorted([-12, 3, 6, 10, 2]) -> false
// ex. sortedArray.isSorted([-12, 3, 6, 10, 2]) -> false
sortedArray.isSorted = function(array) {
  // YOUR CODE HERE
}

module.exports = sortedArray;

},{}],2:[function(require,module,exports){
"use strict";

var sortedArray = require('./sorted_array');

describe("sortedArray.isSorted()", function() {
  it("sortedArray.isSorted([]) -> true", function() {
    expect(sortedArray.isSorted([]) ).toBe(true);
  });
  it("sortedArray.isSorted([1]) -> true", function() {
    expect(sortedArray.isSorted([1]) ).toBe(true);
  });
  it("sortedArray.isSorted([-1]) -> true", function() {
    expect(sortedArray.isSorted([-1]) ).toBe(true);
  });
  it("sortedArray.isSorted([0, 1]) -> true", function() {
    expect(sortedArray.isSorted([0, 1]) ).toBe(true);
  });
  it("sortedArray.isSorted([0, 999]) -> true", function() {
    expect(sortedArray.isSorted([0, 999]) ).toBe(true);
  });
  it("sortedArray.isSorted([-12, 2, 3, 6, 10]) -> true", function() {
    expect(sortedArray.isSorted([-12, 2, 3, 6, 10]) ).toBe(true);
  });
  it("sortedArray.isSorted([-12, 3, 6, 10, 2]) -> false", function() {
    expect(sortedArray.isSorted([-12, 3, 6, 10, 2]) ).toBe(false);
  });
  it("sortedArray.isSorted([-12, 3, 6, 10, 2]) -> false", function() {
    expect(sortedArray.isSorted([-12, 3, 6, 10, 2]) ).toBe(false);
  });
});

},{"./sorted_array":1}]},{},[2]);
