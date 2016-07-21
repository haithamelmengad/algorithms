"use strict";

describe("heap", function() {
  describe("heap with no comparator function", function() {
    var aHeap;
    beforeEach(function() {
      aHeap = new heap();
    });

    describe("heap.push(), heap.pop()", function() {
      it("heap.pop() -> undef", function() {
        expect(aHeap.pop()).toBeUndefined();
      });

      it("heap.push(1); heap.pop() -> 1", function() {
        aHeap.push(1);
        expect(aHeap.pop()).toBe(1);
      });

      it("heap.push(2); heap.push(1); heap.pop() -> 1", function() {
        aHeap.push(2);
        aHeap.push(1);
        expect(aHeap.pop()).toBe(1);
      });

      it("heap.pop() returns items in correct order", function() {
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

    describe("heap.size()", function() {
      it("heap.size() -> 0", function() {
        expect(aHeap.size()).toBe(0);
      });
      it("heap.push(1); heap.size() -> 1", function() {
        aHeap.push(1);
        expect(aHeap.size()).toBe(1);
      });
      it("heap.push(1); heap.pop(); heap.size() -> 0", function() {
        aHeap.push(1);
        aHeap.pop();
        expect(aHeap.size()).toBe(0);
      });
      it("heap.push() returns correct size for a large heap", function() {
        for (var i = 0; i<1000; i++)
          aHeap.push(i);
        expect(aHeap.size()).toBe(1000);
      });
    });

    describe("heap.peek()", function() {
      it("heap.peek() -> undef", function() {
        expect(aHeap.peek()).toBeUndefined();
      });
      it("heap.push(1); heap.peek() -> 1", function() {
        aHeap.push(1);
        expect(aHeap.peek()).toBe(1);
      });
      it("heap.push(1); heap.peek(); heap.peek() -> 1", function() {
        aHeap.push(1);
        aHeap.peek();
        expect(aHeap.peek()).toBe(1);
      });
      it("heap.push(1); heap.pop(); heap.peek() -> undef", function() {
        aHeap.push(1);
        aHeap.pop();
        expect(aHeap.peek()).toBeUndefined();
      });
      it("heap.peek() returns items in correct order", function() {
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

  describe("heap with comparator function", function() {
    var aHeap;
    beforeEach(function () {
      aHeap = new heap(function (a, b) { return b - a });
    });
    describe("heap.push(), heap.pop()", function () {
      it("heap.pop() -> undef", function () {
        expect(aHeap.pop()).toBeUndefined();
      });

      it("heap.push(1); heap.pop() -> 1", function () {
        aHeap.push(1);
        expect(aHeap.pop()).toBe(1);
      });

      it("heap.push(2); heap.push(1); heap.pop() -> 1", function () {
        aHeap.push(1);
        aHeap.push(2);
        expect(aHeap.pop()).toBe(2);
      });

      it("heap.pop() returns items in reverse order", function () {
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

    describe("heap.size()", function () {
      it("heap.size() -> 0", function () {
        expect(aHeap.size()).toBe(0);
      });
      it("heap.push(1); heap.size() -> 1", function () {
        aHeap.push(1);
        expect(aHeap.size()).toBe(1);
      });
      it("heap.push(1); heap.pop(); heap.size() -> 0", function () {
        aHeap.push(1);
        aHeap.pop();
        expect(aHeap.size()).toBe(0);
      });
      it("heap.push() returns correct size for a large heap", function () {
        for (var i = 0; i < 1000; i++)
          aHeap.push(i);
        expect(aHeap.size()).toBe(1000);
      });
    });

    describe("heap.peek()", function () {
      it("heap.peek() -> undef", function () {
        expect(aHeap.peek()).toBeUndefined();
      });
      it("heap.push(1); heap.peek() -> 1", function () {
        aHeap.push(1);
        expect(aHeap.peek()).toBe(1);
      });
      it("heap.push(1); heap.peek(); heap.peek() -> 1", function () {
        aHeap.push(1);
        aHeap.peek();
        expect(aHeap.peek()).toBe(1);
      });
      it("heap.push(1); heap.pop(); heap.peek() -> undef", function () {
        aHeap.push(1);
        aHeap.pop();
        expect(aHeap.peek()).toBeUndefined();
      });
      it("heap.peek() returns items in correct order", function () {
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
