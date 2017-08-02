"use strict";

describe("sortedArray.binarySearch()", function() {
  it("sortedArray.binarySearch([], 3) -> -1", function() {
    expect(sortedArray.binarySearch([], 3) ).toEqual(-1);
  });
  it("sortedArray.binarySearch([1,2,3], 1) -> 0", function() {
    expect(sortedArray.binarySearch([1,2,3], 1) ).toEqual(0);
  });
  it("sortedArray.binarySearch([1,4,5,8], 5) -> 2]", function() {
    expect(sortedArray.binarySearch([1,4,5,8], 5) ).toEqual(2);
  });
  it("sortedArray.binarySearch([2,5,6,8,10,11], 11) -> 5", function() {
    expect(sortedArray.binarySearch([2,5,6,8,10,11], 11) ).toEqual(5);
  });
  it("sortedArray.binarySearch([2,5,6,8,10,11], 1) -> -1", function() {
    expect(sortedArray.binarySearch([2,5,6,8,10,11], 1) ).toEqual(-1);
  });
});

describe("sortedArray.naiveSort()", function() {
  it("sortedArray.naiveSort([]) -> []", function() {
    expect(sortedArray.naiveSort([]) ).toEqual([]);
  });
  it("sortedArray.naiveSort([1,2,3]) -> [1,2,3]", function() {
    expect(sortedArray.naiveSort([1,2,3]) ).toEqual([1,2,3]);
  });
  it("sortedArray.naiveSort([2,2,2]) -> [2,2,2]", function() {
    expect(sortedArray.naiveSort([2,2,2]) ).toEqual([2,2,2]);
  });
  it("sortedArray.naiveSort([3,2,1,2,4]) -> [1,2,2,3,4]", function() {
    expect(sortedArray.naiveSort([3,2,1,2,4]) ).toEqual([1,2,2,3,4]);
  });
  it("sortedArray.naiveSort([3, 2, 1]) -> [1, 2, 3]", function() {
    expect(sortedArray.naiveSort([3, 2, 1]) ).toEqual([1, 2, 3]);
  });
  it("sortedArray.naiveSort([3, 2, 2, 1]) -> [1, 2, 2, 3]", function() {
    expect(sortedArray.naiveSort([3, 2, 2, 1]) ).toEqual([1, 2, 2, 3]);
  });
  it("sortedArray.naiveSort() works on randomly shuffed 10000 item array", function() {
    var input = _.shuffle(_.range(10000));
    expect(sortedArray.naiveSort(input)).toEqual(_.range(10000));
  });
});

describe("sortedArray.mergeSort()", function() {
  it("sortedArray.mergeSort([]) -> []", function() {
    expect(sortedArray.mergeSort([]) ).toEqual([]);
  });
  it("sortedArray.mergeSort([1,2,3]) -> [1,2,3]", function() {
    expect(sortedArray.mergeSort([1,2,3]) ).toEqual([1,2,3]);
  });
  it("sortedArray.mergeSort([2,2,2]) -> [2,2,2]", function() {
    expect(sortedArray.mergeSort([2,2,2]) ).toEqual([2,2,2]);
  });
  it("sortedArray.mergeSort([3,2,1,2,4]) -> [1,2,2,3,4]", function() {
    expect(sortedArray.mergeSort([3,2,1,2,4]) ).toEqual([1,2,2,3,4]);
  });
  it("sortedArray.mergeSort([3, 2, 1]) -> [1, 2, 3]", function() {
    expect(sortedArray.mergeSort([3, 2, 1]) ).toEqual([1, 2, 3]);
  });
  it("sortedArray.mergeSort([3, 2, 2, 1]) -> [1, 2, 2, 3]", function() {
    expect(sortedArray.mergeSort([3, 2, 2, 1]) ).toEqual([1, 2, 2, 3]);
  });
  it("sortedArray.mergeSort() works on randomly shuffed 10000 item array", function() {
    var input = _.shuffle(_.range(10000));
    expect(sortedArray.mergeSort(input)).toEqual(_.range(10000));
  });
});

describe("sortedArray.quickSort()", function() {
  it("sortedArray.quickSort([]) -> []", function() {
    expect(sortedArray.quickSort([]) ).toEqual([]);
  });
  it("sortedArray.quickSort([1,2,3]) -> [1,2,3]", function() {
    expect(sortedArray.quickSort([1,2,3]) ).toEqual([1,2,3]);
  });
  it("sortedArray.quickSort([2,2,2]) -> [2,2,2]", function() {
    expect(sortedArray.quickSort([2,2,2]) ).toEqual([2,2,2]);
  });
  it("sortedArray.quickSort([3,2,1,2,4]) -> [1,2,2,3,4]", function() {
    expect(sortedArray.quickSort([3,2,1,2,4]) ).toEqual([1,2,2,3,4]);
  });
  it("sortedArray.quickSort([3, 2, 1]) -> [1, 2, 3]", function() {
    expect(sortedArray.quickSort([3, 2, 1]) ).toEqual([1, 2, 3]);
  });
  it("sortedArray.quickSort([3, 2, 2, 1]) -> [1, 2, 2, 3]", function() {
    expect(sortedArray.quickSort([3, 2, 2, 1]) ).toEqual([1, 2, 2, 3]);
  });
  it("sortedArray.quickSort() works on randomly shuffed 10000 item array", function() {
    var input = _.shuffle(_.range(10000));
    expect(sortedArray.quickSort(input)).toEqual(_.range(10000));
  });
});
