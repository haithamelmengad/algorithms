'use strict';

var list = require('./linked_list');

describe("heap", function() {
  var aList;
  beforeEach(function() {
    aList = new list();
  });

  var toArray = function (l) {
    var array = [];
    var head = l.first;
    while (head != null) {
      array.push(head.value);
      head = head.next;
    }
    return array;
  };

  describe("linked list basics", function() {
    it("is empty when created", function() {
      expect(toArray(aList).length).toBe(0);
    });
    it("contains the number of items added", function() {
      aList.insert(1);
      aList.insert(1);
      expect(toArray(aList).length).toBe(2);
    });
    it("maintains the right order", function() {
      aList.insert(1);
      aList.insert(2);
      aList.insert(3);
      expect(toArray(aList)).toEqual([1, 2, 3]);
    });
  });

  // describe("reverse()", function() {
  //   it("does nothing to an empty list", function() {
  //     aList.reverse();
  //     expect(toArray(aList).length).toBe(0);
  //   });
  //   it("does nothing to a list with one element", function() {
  //     aList.insert(1);
  //     aList.reverse();
  //     expect(toArray(aList)).toEqual([1]);
  //   });
  //   it("reverses a multi-element list", function() {
  //     aList.insert(0);
  //     aList.insert(1);
  //     aList.insert(2);
  //     aList.insert(3);
  //     aList.insert(5);
  //     expect(toArray(aList.reverse())).toEqual([5, 3, 2, 1, 0]);
  //   });
  // });
});
