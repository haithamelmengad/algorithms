"use strict";

// MATRICES

// A matrix is a two-dimensional array.

// Write a function that rotates an NxN matrix (an array of length N
// containing N arrays each of length N) by 90 degrees to the right.
// Can you do this in place?

// Example:
// rotateMatrix([[1]]) -> [[1]]
// rotateMatrix([[1,2],[3,4]]) -> [[3,1],[4,2]]
// i.e.:
// [[1,2],    [[3,1],
//  [3,4]] ->  [4,2]]
function rotateMatrix(m) {
  // YOUR CODE HERE
  var newArray = [];
  for (var i = 0; i < m.length; i++) {
    var innerArray = [];
    for (var j = 0; j < m.length; j++) {
      var j_2 = m.length - 1 - j;
      innerArray[j] = m[j_2][i];
    }
    newArray.push(innerArray);
  }
  return newArray;
}

window.rotateMatrix = rotateMatrix;
