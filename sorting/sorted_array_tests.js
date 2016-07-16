"use strict";

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
  it("sortedArray.isSorted([11, 1]) -> false", function() {
    expect(sortedArray.isSorted([11, 1]) ).toBe(false);
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
});

describe("sortedArray.indexOf()", function() {
  it("sortedArray.indexOf([], 1) -> -1", function() {
    expect(sortedArray.indexOf([], 1) ).toBe(-1);
  });
  it("sortedArray.indexOf([1], 1) -> 0", function() {
    expect(sortedArray.indexOf([1], 1) ).toBe(0);
  });
  it("sortedArray.indexOf([1], 2) -> -1", function() {
    expect(sortedArray.indexOf([1], 2) ).toBe(-1);
  });
  it("sortedArray.indexOf([0, 1, 2, 3, 4, 6, 7], 4) -> 4", function() {
    expect(sortedArray.indexOf([0, 1, 2, 3, 4, 6, 7], 4) ).toBe(4);
  });
  it("sortedArray.indexOf([0, 1, 2, 3, 4, 6, 7], 5) -> -1", function() {
    expect(sortedArray.indexOf([0, 1, 2, 3, 4, 6, 7], 5) ).toBe(-1);
  });
});

describe("sortedArray.mergeArrays()", function() {
  it("sortedArray.mergeArrays([], []) -> []", function() {
    expect(sortedArray.mergeArrays([], []) ).toEqual([]);
  });
  it("sortedArray.mergeArrays([1, 2], []) -> [1, 2]", function() {
    expect(sortedArray.mergeArrays([1, 2], []) ).toEqual([1, 2]);
  });
  it("sortedArray.mergeArrays([], [1, 2]) -> [1, 2]", function() {
    expect(sortedArray.mergeArrays([], [1, 2]) ).toEqual([1, 2]);
  });
  it("sortedArray.mergeArrays([1, 3], [2]) -> [1, 2, 3]", function() {
    expect(sortedArray.mergeArrays([1, 3], [2]) ).toEqual([1, 2, 3]);
  });
  it("sortedArray.mergeArrays([1, 10], [2, 3, 11]) -> [1, 2, 3, 10, 11]", function() {
    expect(sortedArray.mergeArrays([1, 10], [2, 3, 11]) ).toEqual([1, 2, 3, 10, 11]);
  });
  it("sortedArray.mergeArrays([1, 2, 9, 10, 12], [2, 3, 11]) -> [1, 2, 2, 3, 9, 10, 11, 12]", function() {
    expect(sortedArray.mergeArrays([1, 2, 9, 10, 12], [2, 3, 11]) ).toEqual([1, 2, 2, 3, 9, 10, 11, 12]);
  });
});

describe("sortedArray.removeDuplicates()", function() {
  it("sortedArray.removeDuplicates([]) -> []", function() {
    expect(sortedArray.removeDuplicates([]) ).toEqual([]);
  });
  it("sortedArray.removeDuplicates([1]) -> [1]", function() {
    expect(sortedArray.removeDuplicates([1]) ).toEqual([1]);
  });
  it("sortedArray.removeDuplicates([1, 1, 1, 1]) -> [1]", function() {
    expect(sortedArray.removeDuplicates([1, 1, 1, 1]) ).toEqual([1]);
  });
  it("sortedArray.removeDuplicates([0, 1, 1, 1, 1, 4, 5]) -> [0, 1, 4, 5]", function() {
    expect(sortedArray.removeDuplicates([0, 1, 1, 1, 1, 4, 5]) ).toEqual([0, 1, 4, 5]);
  });
  it("sortedArray.removeDuplicates([-1, 0, 1, 1, 3, 5, 5, 5, 12, 13, 13]) -> [-1, 0, 1, 3, 5, 12, 13]", function() {
    expect(sortedArray.removeDuplicates([-1, 0, 1, 1, 3, 5, 5, 5, 12, 13, 13]) ).toEqual([-1, 0, 1, 3, 5, 12, 13]);
  });
});

describe("sortedArray.bubbleSort()", function() {
  it("sortedArray.bubbleSort([]) -> []", function() {
    expect(sortedArray.bubbleSort([]) ).toEqual([]);
  });
  it("sortedArray.bubbleSort([1,2,3]) -> [1,2,3]", function() {
    expect(sortedArray.bubbleSort([1,2,3]) ).toEqual([1,2,3]);
  });
  it("sortedArray.bubbleSort([2,2,2]) -> [2,2,2]", function() {
    expect(sortedArray.bubbleSort([2,2,2]) ).toEqual([2,2,2]);
  });
  it("sortedArray.bubbleSort([3,2,1,2,4]) -> [1,2,2,3,4]", function() {
    expect(sortedArray.bubbleSort([3,2,1,2,4]) ).toEqual([1,2,2,3,4]);
  });
  it("sortedArray.bubbleSort([3, 2, 1]) -> [1, 2, 3]", function() {
    expect(sortedArray.bubbleSort([3, 2, 1]) ).toEqual([1, 2, 3]);
  });
  it("sortedArray.bubbleSort([3, 2, 2, 1]) -> [1, 2, 2, 3]", function() {
    expect(sortedArray.bubbleSort([3, 2, 2, 1]) ).toEqual([1, 2, 2, 3]);
  });
  it("sortedArray.bubbleSort() works on randomly shuffed 10000 item array", function() {
    var input = _.shuffle(_.range(10000));
    expect(sortedArray.bubbleSort(input)).toEqual(_.range(10000));
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
