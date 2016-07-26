"use strict";

describe("weighted graph", function() {
  it("can set and get edge weight", function() {
    var g = new Graph();
    g.addVertex("A");
    g.addVertex("B");
    g.addEdge("A","B",3);
    expect(g.getWeight("A","B")).toBe(3);
    expect(g.getWeight("B","A")).toBe(3);
  });
});
