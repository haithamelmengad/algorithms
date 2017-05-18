"use strict";

// Write a function that calculates how many different ways can you make change
// for a given positive amount cents with a given set of positive coins which
// has no duplicates.
//
// ex. coinChange(8, []) -> 0, change combinations: (none)
// ex. coinChange(0, []) -> 1, change combinations: []
// ex. coinChange(0, [1, 2, 3]) -> 1, change combinations: []
// ex. coinChange(4, [1, 2, 3]) -> 4, change combinations: [1, 1, 1, 1] [1, 1, 2] [1, 3] [2, 2]
// ex. coinChange(10, [2, 5, 3, 6]) -> 5, change combinations: [2, 2, 2, 2, 2] [2, 2, 3, 3] [2, 2, 6] [2, 3, 5] [5, 5]
// ex. coinChange(50, [2, 5, 3, 7]) -> 158
// ex. coinChange(150, [2, 5, 3, 7]) -> 3158
// ex. coinChange(100, [1, 2, 3, 4, 5]) -> 46262
// ex. coinChange(200, [2, 5, 3, 7, 8, 10, 11]) -> 915649
// ex. coinChange(200, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) -> 1212199424
//
// More details:
// https://www.hackerrank.com/challenges/coin-change
//
// Walkthrough:
// https://www.youtube.com/watch?v=_fgjrs570YE
//
// NOTE: Inefficient solutions may take a long time to run!
function coinChange(cents, coins) {
  // return coinChange_recursive(cents, coins);
  // return coinChange_memoize(cents, coins);
  return coinChange_memoize_2(cents, coins);
}

// O(mn) time where m = cents and n = coins.length
// O(m) space
function coinChange_memoize_2(cents, coins) {
  var temp = []; // store just for cents
  temp[0] = 1; // we have 0 cents, one solution: [] (empty array)
  for (var i = 1; i <= cents; i++) {
    temp[i] = 0; // otherwise we will get undefined
  }
  // we can skip i = 0 since when we do not have any coins, there will be 0
  // solutions
  for (var i = 1; i <= coins.length; i++) {
    var picked = coins[i - 1]; // choose a coin
    for (var j = picked; j <= cents; j++) {
      temp[j] += temp[j - picked];
    }
  }
  return temp[cents];
}

// O(mn) time where m = cents and n = coins.length
// O(mn) space
function coinChange_memoize(cents, coins) {
  var temp = [];
  for (var i = 0; i <= cents; i++) { // bottom up approach
    temp[i] = []; // initialize
    for (var j = 0; j <= coins.length; j++) {
      if (i === 0) {
        temp[i][j] = 1; // if cents 0, we have 1 solution, empty array
      } else if (j === 0) {
        temp[i][j] = 0; // no coins to choose from, no solution
      } else {
        var total = 0;
        if (j - 1 >= 0) {
          total += temp[i][j - 1]; // exclude last coin
        }
        if (i - coins[j - 1] >= 0) {
          total += temp[i - coins[j - 1]][j]; // include last coin
        }
        temp[i][j] = total;
      }
    }
  }
  return temp[cents][coins.length];
}

// O(2^max(cents, coins.length)) time
// O(1) space excluding stack space, O(max(cents, coins.length)) including stack space
function coinChange_recursive(cents, coins) {
  if (cents === 0) {
    return 1; // we have 1 solution, empty array
  }
  if (cents < 0 || (coins.length <= 0 && cents > 0)) {
    return 0; // we have cents, but no coins, no solution
  }
  // bruteforce
  return coinChange_recursive(cents, coins.slice(0, coins.length - 1)) + // exclude coins[coins.length - 1]
         coinChange_recursive(cents - coins[coins.length - 1], coins); // include coins[coins.length - 1]
}
