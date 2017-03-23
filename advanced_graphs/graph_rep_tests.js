"use strict";

var listToMatrix = GraphRepresentations.listToMatrix,
  matrixToList = GraphRepresentations.matrixToList;

describe("graph representations", function() {
  describe("listToMatrix", function() {
    it("converts an empty list to an empty matrix", function() {
      expect(listToMatrix([])).toEqual([]);
    });
    it("listToMatrix([[1]]) -> [[0,1],[1,0]]", function() {
      var matrix = listToMatrix([[1]]);
      expect(matrix).toEqual([[0,1],[1,0]]);
    });
    it("listToMatrix([[],[2]]) -> [[0,0,0],[0,0,1],[0,1,0]]", function() {
      var matrix = listToMatrix([[],[2]]);
      expect(matrix).toEqual([[0,0,0],[0,0,1],[0,1,0]]);
    });
    it("listToMatrix([[1, 2], [3], [3]]) -> [[0,1,1,0],[1,0,0,1],[1,0,0,1],[0,1,1,0]]", function() {
      var matrix = listToMatrix([[1, 2], [3], [3]]);
      expect(matrix).toEqual([[0,1,1,0],[1,0,0,1],[1,0,0,1],[0,1,1,0]]);
    });
  });
  describe("matrixToList", function() {
    it("converts an empty matrix to an empty list", function() {
      expect(matrixToList([])).toEqual([]);
    });
    it("matrixToList([[0,1],[1,0]]) -> [[1]]", function() {
      var list = matrixToList([[0,1],[1,0]]);
      expect(list).toEqual([[1]]);
    });
    it("matrixToList([[0,0,0],[0,0,1],[0,1,0]]) -> [[],[2]]", function() {
      var list = matrixToList([[0,0,0],[0,0,1],[0,1,0]]);
      expect(list).toEqual([[],[2]]);
    });
    it("matrixToList([[0,1,1,0],[1,0,0,1],[1,0,0,1],[0,1,1,0]]) -> [[1, 2], [3], [3]]", function() {
      var list = matrixToList([[0,1,1,0],[1,0,0,1],[1,0,0,1],[0,1,1,0]]);
      expect(list).toEqual([[1, 2], [3], [3]]);
    });
  });
  describe("round trip", function() {
    it("listToMatrix(matrixToList([])) -> []", function() {
      expect(listToMatrix(matrixToList([]))).toEqual([]);
    });
    it("listToMatrix(matrixToList([[0,1],[1,0]])) -> [[0,1],[1,0]]", function() {
      expect(listToMatrix(matrixToList([[0,1],[1,0]]))).toEqual([[0,1],[1,0]]);
    });
    it("matrixToList(listToMatrix([[1]])) -> [[1]]", function() {
      expect(matrixToList(listToMatrix([[1]]))).toEqual([[1]]);
    });
  })
});
