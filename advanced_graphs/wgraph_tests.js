"use strict";

describe("weighted graph", function() {
  describe("an empty graph", function() {
    it("has no vertices", function() {
      var g = new WGraph();
      expect(g.vertices()).toEqual(jasmine.any(Array));
      expect(g.vertices().length).toBe(0);
    });
  });
  describe("a single-vertex graph", function() {
    var g;
    beforeEach(function() {
      g = new WGraph();
      g.addVertex("A");
    });
    it("has one vertex", function() {
      expect(g.vertices()).toEqual(jasmine.any(Array));
      expect(g.vertices().length).toBe(1);
    });
    it("has one vertex called A", function() {
      expect(g.vertices()).toEqual(["A"]);
    });
    it("has no neighbors", function() {
      expect(g.neighbors("A")).toEqual(jasmine.any(Array));
      expect(g.neighbors("A")).toEqual([]);
    });
  });
  describe("a single-edge graph", function() {
    var g;
    beforeEach(function() {
      g = new WGraph();
      g.addVertex("A");
      g.addVertex("B");
      g.addEdge("A","B");
    });
    it("has two vertices", function() {
      expect(g.vertices()).toEqual(jasmine.any(Array));
      expect(g.vertices().length).toBe(2);
    });
    it("has vertices called A and B", function() {
      expect(g.vertices()).toEqual(jasmine.arrayContaining(["A","B"]));
    });
    it("isAdjacent('A','B') -> true", function() {
      expect(g.isAdjacent("A","B")).toBeTruthy();
    });
    it("isAdjacent('B','A') -> true", function() {
      expect(g.isAdjacent("B","A")).toBeTruthy();
    });
    it("neighbors('A') -> ['B']", function() {
      expect(g.neighbors("A")).toEqual(jasmine.any(Array));
      expect(g.neighbors("A")).toEqual(["B"]);
    });
    it("neighbors('B') -> ['A']", function() {
      expect(g.neighbors("B")).toEqual(jasmine.any(Array));
      expect(g.neighbors("B")).toEqual(["A"]);
    });
  });
  describe("a two-edge graph", function() {
    var g;
    beforeEach(function() {
      g = new WGraph();
      g.addVertex("A");
      g.addVertex("B");
      g.addVertex("C");
      g.addEdge("A","B");
      g.addEdge("B","C");
    });
    it("isAdjacent('A','B') -> true", function() {
      expect(g.isAdjacent("A","B")).toBeTruthy();
    });
    it("isAdjacent('B','C') -> true", function() {
      expect(g.isAdjacent("B","C")).toBeTruthy();
    });
    it("isAdjacent('A','C') -> false", function() {
      expect(g.isAdjacent("A","C")).toBeFalsy();
    });
    it("isAdjacent('C','A') -> false", function() {
      expect(g.isAdjacent("C","A")).toBeFalsy();
    });
    it("neighbors('A') -> ['B']", function() {
      expect(g.neighbors("A")).toEqual(["B"]);
    });
    it("neighbors('B') -> ['A','C']", function() {
      expect(g.neighbors("B").length).toBe(2);
      expect(g.neighbors("B")).toEqual(jasmine.arrayContaining(["A","C"]));
    });
    it("neighbors('C') -> ['B']", function() {
      expect(g.neighbors("C")).toEqual(["B"]);
    });
  });
  describe("adding and removing an edge", function() {
    var g;
    beforeEach(function() {
      g = new WGraph();
      g.addVertex("A");
      g.addVertex("B");
      g.addVertex("C");
      g.addEdge("A","B");
      g.addEdge("A","C");
      g.addEdge("B","C");
    });
    it("removeEdge('A','C') -> isAdjacent('A','C') -> false", function() {
      g.removeEdge("A","C");
      expect(g.isAdjacent("A","C")).toBeFalsy();
    });
    it("removeEdge('C','A') -> isAdjacent('A','C') -> false", function() {
      g.removeEdge("C","A");
      expect(g.isAdjacent("A","C")).toBeFalsy();
    });
    it("removeEdge('A','C') -> isAdjacent('C','A') -> false", function() {
      g.removeEdge("A","C");
      expect(g.isAdjacent("C","A")).toBeFalsy();
    });
    it("removeEdge('C','A') -> isAdjacent('C','A') -> false", function() {
      g.removeEdge("C","A");
      expect(g.isAdjacent("C","A")).toBeFalsy();
    });
    it("removeEdge('C','A') -> neighbors('A') -> ['B']", function() {
      g.removeEdge("C","A");
      expect(g.isAdjacent("C","A")).toBeFalsy();
    });
  });
  describe("adding and removing a vertex", function() {
    var g;
    beforeEach(function() {
      g = new WGraph();
      g.addVertex("A");
      g.addVertex("B");
      g.addVertex("C");
      g.addEdge("A","B");
      g.addEdge("A","C");
      g.addEdge("B","C");
      g.removeVertex("A");
    });
    it("removes the vertex", function() {
      expect(g.vertices().length).toBe(2);
      expect(g.vertices()).toEqual(jasmine.arrayContaining(["B","C"]));
    });
    it("neighbors('B') -> ['C']", function() {
      expect(g.neighbors("B")).toEqual(["C"]);
    });
  });
  describe("edge weights", function() {
    it("can set and get edge weight", function() {
      var g = new WGraph();
      g.addVertex("A");
      g.addVertex("B");
      g.addEdge("A","B",3);
      expect(g.getWeight("A","B")).toBe(3);
      expect(g.getWeight("B","A")).toBe(3);
    });
  });
});
