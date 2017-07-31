'use strict';

// Here, we will use a complete version of the linked list to build your stack.
const LinkedList = require('./solutions/linked_list');

// STACKS

// A Stack is a data structure that keeps track of items and allows them to be
// processed (i.e. removed from the stack) in the reverse order that they have
// been added.
// This ordering is known as LIFO (Last-in-first-out).

// JavaScript arrays are good (i.e. fast) for stacks. Here, we will assume that
// the top of the stack refers to index 0 of the array.

// ex.
//    var array = [];
//    array.unshift(1);
//    array.unshift(2);
//    array.unshift(3);
//    array.shift(); // -> 3, note reverse order
//    array.shift(); // -> 2
//    array.shift(); // -> 1

// Below you will find a barebone implementation of a stack using arrays.
// You will need to build another implementation of a stack using
// linked lists. Try to do it within the given time complexity.

// Implementation of a stack using arrays
// Index 0 refers to the top of the stack
class ArrayBasedStack {
  constructor() {
    this.data = [];
  }

  // adds an element with value onto the top of the stack
  // time: O(n)
  push(value) {
    this.data.unshift(value);
  }

  // removes the top element of the stack and returns that value.
  // returns null if the stack is empty.
  // time: O(n)
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.data.shift();
  }

  // returns true if the stack is empty, and false otherwise
  // time: O(1)
  isEmpty() {
    return this.data.length === 0;
  }

  // returns the top element of the stack. returns null if the stack is empty
  // time: O(1)
  top() {
    if (this.isEmpty()) {
      return null;
    }
    return this.data[0];
  }
}

// Implementation of a stack using linked lists. Do refer to linked_list.js
// for a list of available functions.
class Stack {
  constructor() {
    this.data = new LinkedList();
  }

  // adds an element with value onto the top of the stack
  // time: O(1)
  push(value) {
    // YOUR CODE HERE
  }

  // removes the top element of the stack and returns that value.
  // returns null if the stack is empty.
  // time: O(1)
  pop() {
    // YOUR CODE HERE
  }

  // returns true if the stack is empty, and false otherwise
  // time: O(1)
  isEmpty() {
    // YOUR CODE HERE
  }

  // returns the top element of the stack. returns null if the stack is empty
  // time: O(1)
  top() {
    // YOUR CODE HERE
  }
}

module.exports = Stack;
