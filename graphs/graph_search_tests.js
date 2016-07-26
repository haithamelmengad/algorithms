"use strict";

describe("graph search", function() {
  describe("isConnected", function() {
    it("returns true for a single-vertex graph", function() {
      var g = new Graph();
      g.addVertex("A");
      expect(g.isConnected()).toBeTruthy();
    });
    it("returns true for a small connected graph", function() {
      var g = new Graph();
      g.addVertex("A");
      g.addVertex("B");
      g.addEdge("A","B");
      expect(g.isConnected()).toBeTruthy();
    });
    it("returns false for a small unconnected graph", function() {
      var g = new Graph();
      g.addVertex("A");
      g.addVertex("B");
      expect(g.isConnected()).toBeFalsy();
    });
    it("returns true for a large connected graph", function() {
      var g = new Graph();
      g.addVertex("A");
      g.addVertex("B");
      g.addVertex("C");
      g.addVertex("D");
      g.addVertex("E");
      g.addEdge("A","B");
      g.addEdge("B","C");
      g.addEdge("A","D");
      g.addEdge("D","E");
      expect(g.isConnected()).toBeTruthy();
    });
    it("returns false for a large unconnected graph", function() {
      var g = new Graph();
      g.addVertex("A");
      g.addVertex("B");
      g.addVertex("C");
      g.addVertex("D");
      g.addVertex("E");
      g.addEdge("A","B");
      g.addEdge("A","D");
      g.addEdge("D","E");
      expect(g.isConnected()).toBeFalsy();
    });
  });
  describe("depth-first search", function() {
    it("returns sole vertex for a single-vertex graph", function() {
      var g = new Graph();
      g.addVertex("A");
      expect(g.dfs()).toEqual(["A"]);
    });
    it("follows a chain of vertices", function() {
      var g = new Graph();
      g.addVertex("A");
      g.addVertex("B");
      g.addVertex("C");
      g.addVertex("D");
      g.addVertex("E");
      g.addEdge("A","B");
      g.addEdge("B","C");
      g.addEdge("C","D");
      g.addEdge("D","E");
      expect(g.dfs()).toEqual(["A","B","C","D","E"]);
    });
    it("goes deep not broad", function() {
      var g = new Graph();
      g.addVertex("A");
      g.addVertex("B");
      g.addVertex("C");
      g.addVertex("D");
      g.addVertex("E");
      g.addVertex("F");
      g.addEdge("A","B");
      g.addEdge("B","C");
      g.addEdge("B","F");
      g.addEdge("C","D");
      g.addEdge("D","E");
      expect(g.dfs()).toEqual(["A","B","C","D","E","F"]);
    });
  });
  describe("breadth-first search", function() {
    it("returns sole vertex for a single-vertex graph", function() {
      var g = new Graph();
      g.addVertex("A");
      expect(g.bfs()).toEqual(["A"]);
    });
    it("follows a chain of vertices", function() {
      var g = new Graph();
      g.addVertex("A");
      g.addVertex("B");
      g.addVertex("C");
      g.addVertex("D");
      g.addVertex("E");
      g.addEdge("A","B");
      g.addEdge("B","C");
      g.addEdge("C","D");
      g.addEdge("D","E");
      expect(g.bfs()).toEqual(["A","B","C","D","E"]);
    });
    it("goes broad not deep", function() {
      var g = new Graph();
      g.addVertex("A");
      g.addVertex("B");
      g.addVertex("C");
      g.addVertex("D");
      g.addVertex("E");
      g.addVertex("F");
      g.addEdge("A","B");
      g.addEdge("B","C");
      g.addEdge("B","F");
      g.addEdge("C","D");
      g.addEdge("D","E");
      expect(g.bfs()).toEqual(["A","B","C","F","D","E"]);
    });
  });
});
