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
    it("solves a different three-node tour", function() {
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
      g.addEdge("A","C",4);
      g.addEdge("A","D",1);
      g.addEdge("B","C",1);
      g.addEdge("B","D",4);
      g.addEdge("C","D",3);
      var solution = TSP.bruteForce(g);
      expect(solution.path).toEqual(["A","B","C","D","A"]);
      expect(solution.distance).toBe(8);
    });
    it("solves a five-node tour", function() {
      var g = WGraph.fromJSON('{"nodes":[0,1,2,3,4],"adjList":{"0":[[1,25],[2,97],[3,84],[4,85]],"1":[[2,47],[3,24],[4,45]],"2":[[3,44],[4,58]],"3":[[4,71]],"4":[]}}');
      var solution = TSP.bruteForce(g);
      expect(solution.path).toEqual([ 0, 1, 3, 2, 4, 0 ]);
      expect(solution.distance).toBe(236);
    });
    // too slow! runtime ~5 mins.
    // it("solves a ten-node tour", function() {
    //   var g = WGraph.fromJSON('{"nodes":[0,1,2,3,4,5,6,7,8,9],"adjList":{"0":[[1,57],[2,3],[3,92],[4,57],[5,31],[6,60],[7,57],[8,57],[9,52]],"1":[[2,79],[3,84],[4,41],[5,7],[6,70],[7,11],[8,38],[9,85]],"2":[[3,4],[4,68],[5,22],[6,80],[7,31],[8,62],[9,86]],"3":[[4,40],[5,45],[6,21],[7,79],[8,2],[9,89]],"4":[[5,33],[6,64],[7,59],[8,1],[9,79]],"5":[[6,3],[7,47],[8,15],[9,62]],"6":[[7,84],[8,12],[9,18]],"7":[[8,5],[9,14]],"8":[[9,59]],"9":[]}}');
    //   var solution = TSP.bruteForce(g);
    //   expect(solution.path).toEqual([ 0, 2, 3, 8, 4, 1, 7, 9, 6, 5, 0 ]);
    //   expect(solution.distance).toBe(128);
    // });
  });

  describe("nearest neighbor algorithm", function() {
    it("solves a single-node tour", function() {
      var g = new WGraph();
      g.addVertex("A");
      var solution = TSP.nearestNeighbor(g);
      expect(solution.path).toEqual(["A"]);
      expect(solution.distance).toBe(0);
    });
    it("solves a two-node tour", function() {
      var g = new WGraph();
      g.addVertex("A");
      g.addVertex("B");
      g.addEdge("A","B",12);
      var solution = TSP.nearestNeighbor(g);
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
      var solution = TSP.nearestNeighbor(g);
      expect(solution.path).toEqual(["A","B","C","A"]);
      expect(solution.distance).toBe(12);
    });
    it("solves a different three-node tour", function() {
      var g = new WGraph();
      g.addVertex("A");
      g.addVertex("B");
      g.addVertex("C");
      g.addEdge("A","B",1);
      g.addEdge("A","C",5);
      g.addEdge("B","C",1);
      var solution = TSP.nearestNeighbor(g);
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
      g.addEdge("A","C",4);
      g.addEdge("A","D",1);
      g.addEdge("B","C",1);
      g.addEdge("B","D",4);
      g.addEdge("C","D",3);
      var solution = TSP.nearestNeighbor(g);
      var correct = ["A","B","C","D","A"];
      expect(_.isEqual(solution.path, correct) || _.isEqual(solution.path, correct.reverse())).toBe(true);
      expect(solution.distance).toBe(8);
    });
    it("solves a five-node tour", function() {
      var g = WGraph.fromJSON('{"nodes":[0,1,2,3,4],"adjList":{"0":[[1,25],[2,97],[3,84],[4,85]],"1":[[2,47],[3,24],[4,45]],"2":[[3,44],[4,58]],"3":[[4,71]],"4":[]}}');
      var solution = TSP.nearestNeighbor(g);
      var correct = [ 0, 1, 3, 2, 4, 0 ];
      expect(_.isEqual(solution.path, correct) || _.isEqual(solution.path, correct.reverse())).toBe(true);
      expect(solution.distance).toBe(236);
    });
    it("solves a ten-node tour", function() {
      var g = WGraph.fromJSON('{"nodes":[0,1,2,3,4,5,6,7,8,9],"adjList":{"0":[[1,57],[2,3],[3,92],[4,57],[5,31],[6,60],[7,57],[8,57],[9,52]],"1":[[2,79],[3,84],[4,41],[5,7],[6,70],[7,11],[8,38],[9,85]],"2":[[3,4],[4,68],[5,22],[6,80],[7,31],[8,62],[9,86]],"3":[[4,40],[5,45],[6,21],[7,79],[8,2],[9,89]],"4":[[5,33],[6,64],[7,59],[8,1],[9,79]],"5":[[6,3],[7,47],[8,15],[9,62]],"6":[[7,84],[8,12],[9,18]],"7":[[8,5],[9,14]],"8":[[9,59]],"9":[]}}');
      var solution = TSP.nearestNeighbor(g);
      var correct = [ 4, 8, 3, 2, 0, 5, 6, 9, 7, 1, 4 ];
      expect(_.isEqual(solution.path, correct) || _.isEqual(solution.path, correct.reverse())).toBe(true);
      expect(solution.distance).toBe(128);
    });
  });

  describe("pairwise swap algorithm", function() {
    it("solves a single-node tour", function() {
      var g = new WGraph();
      g.addVertex("A");
      var solution = TSP.pairwise(g);
      expect(solution.path).toEqual(["A"]);
      expect(solution.distance).toBe(0);
    });
    it("solves a two-node tour", function() {
      var g = new WGraph();
      g.addVertex("A");
      g.addVertex("B");
      g.addEdge("A","B",12);
      var solution = TSP.pairwise(g);
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
      var solution = TSP.pairwise(g);
      expect(solution.path).toEqual(["A","B","C","A"]);
      expect(solution.distance).toBe(12);
    });
    it("solves a different three-node tour", function() {
      var g = new WGraph();
      g.addVertex("A");
      g.addVertex("B");
      g.addVertex("C");
      g.addEdge("A","B",1);
      g.addEdge("A","C",5);
      g.addEdge("B","C",1);
      var solution = TSP.pairwise(g);
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
      g.addEdge("A","C",4);
      g.addEdge("A","D",1);
      g.addEdge("B","C",1);
      g.addEdge("B","D",4);
      g.addEdge("C","D",3);
      var solution = TSP.pairwise(g);
      var correct = ["A","B","C","D","A"];
      expect(_.isEqual(solution.path, correct) || _.isEqual(solution.path, correct.reverse())).toBe(true);
      expect(solution.distance).toBe(8);
    });
    it("solves a five-node tour", function() {
      var g = WGraph.fromJSON('{"nodes":[0,1,2,3,4],"adjList":{"0":[[1,25],[2,97],[3,84],[4,85]],"1":[[2,47],[3,24],[4,45]],"2":[[3,44],[4,58]],"3":[[4,71]],"4":[]}}');
      var solution = TSP.pairwise(g);
      var correct = [ 0, 1, 3, 2, 4, 0 ];
      expect(_.isEqual(solution.path, correct) || _.isEqual(solution.path, correct.reverse())).toBe(true);
      expect(solution.distance).toBe(236);
    });
    it("solves a ten-node tour", function() {
      var g = WGraph.fromJSON('{"nodes":[0,1,2,3,4,5,6,7,8,9],"adjList":{"0":[[1,57],[2,3],[3,92],[4,57],[5,31],[6,60],[7,57],[8,57],[9,52]],"1":[[2,79],[3,84],[4,41],[5,7],[6,70],[7,11],[8,38],[9,85]],"2":[[3,4],[4,68],[5,22],[6,80],[7,31],[8,62],[9,86]],"3":[[4,40],[5,45],[6,21],[7,79],[8,2],[9,89]],"4":[[5,33],[6,64],[7,59],[8,1],[9,79]],"5":[[6,3],[7,47],[8,15],[9,62]],"6":[[7,84],[8,12],[9,18]],"7":[[8,5],[9,14]],"8":[[9,59]],"9":[]}}');
      var solution = TSP.pairwise(g);
      var correct = [ 4, 8, 3, 2, 0, 5, 6, 9, 7, 1, 4 ];
      expect(_.isEqual(solution.path, correct) || _.isEqual(solution.path, correct.reverse())).toBe(true);
      expect(solution.distance).toBe(128);
    });
  });
});
