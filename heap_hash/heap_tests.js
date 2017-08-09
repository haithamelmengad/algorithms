"use strict";

describe("Heap", function() {
  describe("Heap with no comparator function", function() {
    var aHeap;
    beforeEach(function() {
      aHeap = new Heap();
    });

    describe("Heap.push(), Heap.pop()", function() {
      it("Heap.pop() -> undef", function() {
        expect(aHeap.pop()).toBeUndefined();
      });

      it("Heap.push(1); Heap.pop() -> 1", function() {
        aHeap.push(1);
        expect(aHeap.pop()).toBe(1);
      });

      it("Heap.push(2); Heap.push(1); Heap.pop() -> 1", function() {
        aHeap.push(2);
        aHeap.push(1);
        expect(aHeap.pop()).toBe(1);
      });

      it("Heap.pop() returns items in correct order", function() {
        aHeap.push(34);
        aHeap.push(92);
        aHeap.push(0);
        aHeap.push(-29);
        aHeap.push(7);
        expect(aHeap.pop()).toBe(-29);
        expect(aHeap.pop()).toBe(0);
        expect(aHeap.pop()).toBe(7);
        expect(aHeap.pop()).toBe(34);
        expect(aHeap.pop()).toBe(92);
        expect(aHeap.pop()).toBeUndefined();
      });
    });

    describe("Heap.size()", function() {
      it("Heap.size() -> 0", function() {
        expect(aHeap.size()).toBe(0);
      });
      it("Heap.push(1); Heap.size() -> 1", function() {
        aHeap.push(1);
        expect(aHeap.size()).toBe(1);
      });
      it("Heap.push(1); Heap.pop(); Heap.size() -> 0", function() {
        aHeap.push(1);
        aHeap.pop();
        expect(aHeap.size()).toBe(0);
      });
      it("Heap.push() returns correct size for a large Heap", function() {
        for (var i = 0; i<1000; i++)
          aHeap.push(i);
        expect(aHeap.size()).toBe(1000);
      });
    });

    describe("Heap.peek()", function() {
      it("Heap.peek() -> undef", function() {
        expect(aHeap.peek()).toBeUndefined();
      });
      it("Heap.push(1); Heap.peek() -> 1", function() {
        aHeap.push(1);
        expect(aHeap.peek()).toBe(1);
      });
      it("Heap.push(1); Heap.peek(); Heap.peek() -> 1", function() {
        aHeap.push(1);
        aHeap.peek();
        expect(aHeap.peek()).toBe(1);
      });
      it("Heap.push(1); Heap.pop(); Heap.peek() -> undef", function() {
        aHeap.push(1);
        aHeap.pop();
        expect(aHeap.peek()).toBeUndefined();
      });
      it("Heap.peek() returns items in correct order", function() {
        aHeap.push(34);
        aHeap.push(92);
        aHeap.push(0);
        aHeap.push(-29);
        aHeap.push(7);
        expect(aHeap.peek()).toBe(-29);
        aHeap.pop();
        expect(aHeap.peek()).toBe(0);
        aHeap.pop();
        expect(aHeap.peek()).toBe(7);
        aHeap.pop();
        expect(aHeap.peek()).toBe(34);
        aHeap.pop();
        expect(aHeap.peek()).toBe(92);
        aHeap.pop();
        expect(aHeap.peek()).toBeUndefined();
      });
    });
  });

  describe("Heap with comparator function", function() {
    var aHeap;
    beforeEach(function () {
      aHeap = new Heap(function (a, b) { return b - a });
    });
    describe("Heap.push(), Heap.pop()", function () {
      it("Heap.pop() -> undef", function () {
        expect(aHeap.pop()).toBeUndefined();
      });

      it("Heap.push(1); Heap.pop() -> 1", function () {
        aHeap.push(1);
        expect(aHeap.pop()).toBe(1);
      });

      it("Heap.push(2); Heap.push(1); Heap.pop() -> 1", function () {
        aHeap.push(1);
        aHeap.push(2);
        expect(aHeap.pop()).toBe(2);
      });

      it("Heap.pop() returns items in reverse order", function () {
        aHeap.push(34);
        aHeap.push(92);
        aHeap.push(0);
        aHeap.push(-29);
        aHeap.push(7);
        expect(aHeap.pop()).toBe(92);
        expect(aHeap.pop()).toBe(34);
        expect(aHeap.pop()).toBe(7);
        expect(aHeap.pop()).toBe(0);
        expect(aHeap.pop()).toBe(-29);
        expect(aHeap.pop()).toBeUndefined();
      });
    });

    describe("Heap.size()", function () {
      it("Heap.size() -> 0", function () {
        expect(aHeap.size()).toBe(0);
      });
      it("Heap.push(1); Heap.size() -> 1", function () {
        aHeap.push(1);
        expect(aHeap.size()).toBe(1);
      });
      it("Heap.push(1); Heap.pop(); Heap.size() -> 0", function () {
        aHeap.push(1);
        aHeap.pop();
        expect(aHeap.size()).toBe(0);
      });
      it("Heap.push() returns correct size for a large Heap", function () {
        for (var i = 0; i < 1000; i++)
          aHeap.push(i);
        expect(aHeap.size()).toBe(1000);
      });
    });

    describe("Heap.peek()", function () {
      it("Heap.peek() -> undef", function () {
        expect(aHeap.peek()).toBeUndefined();
      });
      it("Heap.push(1); Heap.peek() -> 1", function () {
        aHeap.push(1);
        expect(aHeap.peek()).toBe(1);
      });
      it("Heap.push(1); Heap.peek(); Heap.peek() -> 1", function () {
        aHeap.push(1);
        aHeap.peek();
        expect(aHeap.peek()).toBe(1);
      });
      it("Heap.push(1); Heap.pop(); Heap.peek() -> undef", function () {
        aHeap.push(1);
        aHeap.pop();
        expect(aHeap.peek()).toBeUndefined();
      });
      it("Heap.peek() returns items in correct order", function () {
        aHeap.push(34);
        aHeap.push(92);
        aHeap.push(0);
        aHeap.push(-29);
        aHeap.push(7);
        expect(aHeap.peek()).toBe(92);
        aHeap.pop();
        expect(aHeap.peek()).toBe(34);
        aHeap.pop();
        expect(aHeap.peek()).toBe(7);
        aHeap.pop();
        expect(aHeap.peek()).toBe(0);
        aHeap.pop();
        expect(aHeap.peek()).toBe(-29);
        aHeap.pop();
        expect(aHeap.peek()).toBeUndefined();
      });
    });
  });
});
