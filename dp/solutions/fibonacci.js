"use strict";

// Write a function that calculates the nth fibonacci number.
//
// ex. fibonacci(0) -> 0
// ex. fibonacci(1) -> 1
// ex. fibonacci(2) -> 1
// ex. fibonacci(3) -> 2
// ex. fibonacci(10) -> 55
// ex. fibonacci(21) -> 10946
// ex. fibonacci(80) -> 23416728348467685
function fibonacci(n) {
  // return fibonacci_default(n);
  // return fibonacci_top(n);
  // return fibonacci_btm(n);
  return fibonacci_btm_2(n);
  // alternatively: we can also achieve O(log n) time and O(1) space through divide & conquer (and math...)
  // ref: https://en.wikipedia.org/wiki/Fibonacci_number#Matrix_form
}

// O(2^n) time
// O(1) space exluding stack space, O(n) space including stack space
function fibonacci_default(n) { // Naive
  if (n <= 1) {
    return n;
  }
  return fibonacci_default(n - 1) + fibonacci_default(n - 2);
}

// O(n) time
// O(n) space
function fibonacci_top(n) { // Top-down approach
  var table = [];
  function helper(n) {
    if (table[n] === undefined) {
      if (n <= 1) {
        table[n] = n;
      } else {
        table[n] = helper(n - 1) + helper(n - 2);
      }
    }
    return table[n];
  }
  return helper(n);
}

// O(n) time
// O(n) space
function fibonacci_btm(n) { // Bottom-up approach
  var table = [];
  table[0] = 0;
  table[1] = 1;
  for (var i = 2; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }
  return table[n];
}

// O(n) time
// O(1) space
function fibonacci_btm_2(n) { // Bottom-up approach
  if (n <= 1) {
    return n;
  }
  var first = 0;
  var second = 1;
  var temp;
  for (var i = 2; i <= n; i++) {
    temp = first + second;
    first = second;
    second = temp;
  }
  return second;
}
