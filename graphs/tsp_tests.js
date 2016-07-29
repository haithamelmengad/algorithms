"use strict";

describe("traveling salesman", function() {
  describe("brute force algorithm", function() {
    it("solves a single-node tour", function() {
      var g = new WGraph();
      g.addVertex("A");
      var solution = TSP.bruteForce(g);
      expect(solution.path).toEqual(["A"]);
      expect(solution.distance).toBe(0);
    });
    it("solves a two-node tour", function() {
      var g = new WGraph();
      g.addVertex("A");
      g.addVertex("B");
      g.addEdge("A","B",12);
      var solution = TSP.bruteForce(g);
      expect(solution.path).toEqual(["A","B","A"]);
      expect(solution.distance).toBe(24);
    });
    it("solves a three-node tour", function() {
      var g = new WGraph();
      g.addVertex("A");
      g.addVertex("B");
      g.addVertex("C");
      g.addEdge("A","B",3);
      g.addEdge("A","C",4);
      g.addEdge("B","C",5);
      var solution = TSP.bruteForce(g);
      expect(solution.path).toEqual(["A","B","C","A"]);
      expect(solution.distance).toBe(12);
    });
    it("solves another three-node tour", function() {
      var g = new WGraph();
      g.addVertex("A");
      g.addVertex("B");
      g.addVertex("C");
      g.addEdge("A","B",1);
      g.addEdge("A","C",5);
      g.addEdge("B","C",1);
      var solution = TSP.bruteForce(g);
      expect(solution.path).toEqual(["A","B","C","A"]);
      expect(solution.distance).toBe(7);
    });
    it("solves a four-node tour", function() {
      var g = new WGraph();
      g.addVertex("A");
      g.addVertex("B");
      g.addVertex("C");
      g.addVertex("D");
      g.addEdge("A","B",3);
      g.addEdge("A","C",3);
      g.addEdge("A","D",1);
      g.addEdge("B","C",1);
      g.addEdge("B","D",3);
      g.addEdge("C","D",3);
      var solution = TSP.bruteForce(g);
      expect(solution.path).toEqual(["A","B","C","D","A"]);
      expect(solution.distance).toBe(8);
    });
  });
});
