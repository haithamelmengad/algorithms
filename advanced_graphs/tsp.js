"use strict";

// TRAVELING SALESMAN PROBLEM

// The traveling salesman problem (TSP, for short) is one of the most well-known
// and one of the hardest problems in computer science. In fact, there is no
// known algorithm to compute a 100% provably optimal solution in a finite
// amount of time, but various algorithms and heuristics exist which get us most
// of the way there.

// The problem is as follows: given a list of cities and the distances between
// pairs (i.e., a connected, weighted graph), what is the shortest path that
// visits each city precisely once and returns to the origin city?

// We'll start with a brute force approach, which works for small problem sets,
// and work towards a heuristic-based solution that can handle a very large
// problem set.

var TSP = {};

// Recalling the shortest-path problem, as well as BFS/DFS, write a brute-force
// algorithm that takes a graph and examines every possible route, returning an
// object containing the shortest path and the total distance, e.g.:
// {
//   path: ["A","B","C"],
//   distance: 1200
// }
TSP.bruteForce = function(g) {
  // YOUR CODE HERE
};

// The first, simplest way we can improve TSP is with something called a greedy
// algorithm (a.k.a. nearest neighbor), which, instead of examining every
// possible route, instead always picks the nearest unvisited city as the next
// destination. It should return an object in the same format as the first
// function.
TSP.nearestNeighbor = function(g) {
  // YOUR CODE HERE
};

// A more sophisticated choice is an improvement algorithm: we start with one
// possible solution, examine ways we might improve it, pick the best, and then
// iterate until we cannot improve any more. This isn't guaranteed to find the
// global optimal solution (we may be stuck in a local maximum), but it can get
// us pretty close, pretty quickly.

// Write an algorithm that starts with the output of the nearestNeighbor
// function, then considers all possible pairwise swaps of nodes, picking the
// best one. When no pairwise swap would improve the current route, you're done.
// It should return an object in the same format as the first function.
TSP.pairwise = function(g) {
  // YOUR CODE HERE
};

// Note that there are many, many other algorithms and heuristics that have been
// designed to solve TSP. If you're curious to learn more, check out the
// following links.
// https://en.wikipedia.org/wiki/Travelling_salesman_problem
// http://www.math.uwaterloo.ca/tsp/index.html
// http://www.math.uwaterloo.ca/tsp/concorde/index.html
// http://gebweb.net/optimap/
// http://www.iwr.uni-heidelberg.de/groups/comopt/software/TSPLIB95/
// https://louisville.edu/speed/faculty/sheragu/Research/Intelligent/tsp.PDF
// https://developers.google.com/optimization/routing/tsp
// https://www.youtube.com/watch?v=STbkQbsIYVQ (explanation of exact solution)
// http://itunes.apple.com/us/app/concorde-tsp/id498366515?mt=8 - Pretty sweet
// app that includes visualizations

window.TSP = TSP;

