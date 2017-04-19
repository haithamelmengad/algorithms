"use strict";
// Write a function stars() that takes a variable N and prints the perimeter of
// a square of stars with side length N.
var _ = require('underscore');

// function square(n) {
//   var str = '';
//   for (var i = 0; i < n; i++) {
//     if (i === 0 || i === (n - 1)) {
//       // first and last
//       str = '';
//       for (var j = 0; j < n; j++) {
//         str += '*';
//       }
//       console.log(str);
//     } else {
//       // everything else
//       str = []
//       for (var j = 0; j < n; j++) {
//         if (j === 0 || j === (n - 1)) {
//           str.push('*')
//         } else {
//           str.push(' ');
//         }
//       }
//       console.log(str.join(''));
//     }
//   }
// }

// function square(n) {
//   _.range(n).forEach(i => {
//     if (i === 0 || i === (n - 1)) {
//       console.log(_.range(n).map(_.constant('*')).join(''));
//     } else {
//       console.log(_.range(n).map(j => (j === 0 || j === (n - 1)) ? '*' : ' ').join(''));
//     }
//   });
// }

function square(n) {
  return _.range(n).map(i =>
    (i === 0 || i === (n - 1)) ?
      _.range(n).map(_.constant('*')).join('')
      :
      _.range(n).map(j => (j === 0 || j === (n - 1)) ? '*' : ' ').join('')
    ).join('\n');
}

console.log(square(10));
// square(10);
