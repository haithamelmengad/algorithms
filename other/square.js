"use strict";
// Write a function stars() that takes a variable N and prints the perimeter of
// a square of stars with side length N.
var _ = require('underscore');
function square(n) {
  _.range(n).forEach(i => {
    if (i === 0 || i === (n - 1)) {
      console.log(_.range(n).map(_.constant('*')).join(''));
    } else {
      console.log(_.range(n).map(j => (j === 0 || j === (n - 1)) ? '*' : ' ').join(''));
    }
  });
}

square(5);
square(10);
