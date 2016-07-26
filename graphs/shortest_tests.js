"use strict";

describe("shortestPath()", function() {
  it("returns shortest path with two vertices", function() {
    var g = new Graph();
    g.addVertex("A");
    g.addVertex("B");
    g.addEdge("A","B",3);
    var sp = shortestPath(g, "A", "B");
    expect(sp).toBe(jasmine.objectContaining(["path","total"]));
    expect(sp.path).toEqual(["A","B"]);
    expect(sp.total).toBe(3);
  });
  it("returns shortest path with three vertices", function() {
    var g = new Graph();
    g.addVertex("A");
    g.addVertex("B");
    g.addVertex("C");
    g.addEdge("A","B",3);
    g.addEdge("B","C",2);
    var sp = shortestPath(g, "A", "C");
    expect(sp).toBe(jasmine.objectContaining(["path","total"]));
    expect(sp.path).toEqual(["A","B","C"]);
    expect(sp.total).toBe(5);
  });
  it("returns shortest path not fewest hops", function() {
    var g = new Graph();
    g.addVertex("A");
    g.addVertex("B");
    g.addVertex("C");
    g.addVertex("D");
    g.addVertex("E");
    g.addVertex("F");
    g.addEdge("A","B",2);
    g.addEdge("A","C",4);
    g.addEdge("C","F",4);
    g.addEdge("B","D",2);
    g.addEdge("B","E",1);
    g.addEdge("E","F",3);
    var sp = shortestPath(g, "A", "F");
    expect(sp).toBe(jasmine.objectContaining(["path","total"]));
    expect(sp.path).toEqual(["A","B","E","F"]);
    expect(sp.total).toBe(6);
  });
  it("solves a complex graph", function() {
    var g = new Graph();
    g.addVertex(0);
    g.addVertex(1);
    g.addVertex(2);
    g.addVertex(3);
    g.addVertex(4);
    g.addVertex(5);
    g.addVertex(6);
    g.addVertex(7);
    g.addVertex(8);
    g.addVertex(9);
    g.addVertex(10);
    g.addVertex(11);
    g.addVertex(12);
    g.addVertex(13);
    g.addVertex(14);
    g.addEdge(0, 4, 6);
    g.addEdge(0, 14, 3);
    g.addEdge(1, 5, 1);
    g.addEdge(2, 3, 4);
    g.addEdge(2, 5, 9);
    g.addEdge(3, 2, 4);
    g.addEdge(3, 6, 7);
    g.addEdge(4, 0, 6);
    g.addEdge(4, 7, 5);
    g.addEdge(4, 8, 6);
    g.addEdge(5, 1, 1);
    g.addEdge(5, 2, 9);
    g.addEdge(5, 8, 2);
    g.addEdge(6, 3, 7);
    g.addEdge(6, 10, 6);
    g.addEdge(7, 4, 5);
    g.addEdge(7, 11, 4);
    g.addEdge(8, 4, 6);
    g.addEdge(8, 5, 2);
    g.addEdge(8, 11, 7);
    g.addEdge(9, 12, 9);
    g.addEdge(10, 6, 6);
    g.addEdge(10, 17, 5);
    g.addEdge(11, 7, 4);
    g.addEdge(11, 8, 7);
    g.addEdge(11, 14, 3);
    g.addEdge(12, 9, 9);
    g.addEdge(12, 16, 5);
    g.addEdge(13, 17, 3);
    g.addEdge(14, 0, 3);
    g.addEdge(14, 11, 3);
    g.addEdge(14, 15, 3);
    g.addEdge(15, 14, 3);
    g.addEdge(15, 16, 8);
    g.addEdge(16, 12, 5);
    g.addEdge(16, 15, 8);
    g.addEdge(17, 10, 5);
    g.addEdge(17, 13, 3);
    var sp = shortestPath(g, 0, 17);
    expect(sp).toBe(jasmine.objectContaining(["path","total"]));
    expect(sp.path).toEqual([]);
    expect(sp.total).toBe();
  });
});
