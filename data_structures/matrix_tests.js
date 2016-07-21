"use strict";

describe("rotateMatrix", function() {
  it("rotates a 1x1 matrix", function() {
    expect(rotateMatrix([[1]])).toEqual([[1]]);
  });
  it("rotates a 2x2 matrix", function() {
    expect(rotateMatrix([[1,2],[3,4]])).toEqual([[3,1],[4,2]]);
  });
  it("rotates a 3x3 matrix", function() {
    expect(rotateMatrix([[1,2,3],[4,5,6],[7,8,9]])).toEqual([[7,4,1],[8,5,2],[9,6,3]]);
  });
  it("rotates a 4x4 matrix", function() {
    expect(rotateMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])).toEqual([[13,9,5,1],[14,10,6,2],[15,11,7,3],[16,12,8,4]]);
  });
});
