'use strict';

// LINKED LISTS

// A linked list is one of the simplest, most useful, and most common data
// structures consisting of a set of nodes which each contain a piece of
// data and a link to the next element.

// Below you will find a barebone implementation of a linked list for you.
// Complete all the functions below and try to do it within the given time
// complexity.

// A Linked List Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// A Linked List (llist). It contains a reference to the head node.
// Note that this linked list implementation is slightly different 
// from the one in the lecture slides. Here, we do not have a reference 
// to the tail node.
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Adds a new node containing value to the front of llist
  // time: O(1)
  addFront(value) {
    // YOUR CODE HERE
  }

  // Adds a new node containing value to the back of llist
  // time: O(n), where n is the length of llist
  addBack(value) {
    // YOUR CODE HERE
  }

  // Removes the node at the front of llist and returns the value of the
  // removed node. If llist is empty, return null.
  // time: O(1)
  removeFront() {
    // YOUR CODE HERE
  }

  // Removes the node at the back of llist and returns the value of the removed
  // node. If llist is empty, return null.
  // time: O(n), where n is the length of llist
  removeBack() {
    // YOUR CODE HERE
  }

  // Returns true if llist is empty (has no nodes)
  // time: O(1)
  isEmpty() {
    // YOUR CODE HERE
  }

  // Returns the number of nodes in llist
  // time: O(n), where n is the length of llist
  length() {
    // YOUR CODE HERE
  }

  // Squares each item in llist
  // time: O(n), where n is the length of llist
  sqr() {
    // YOUR CODE HERE
  }

  // Questions to think about:
  //   1. What can we do to make length() O(1)?
  //   2. What about making removeBack() O(1)?

  // BONUS SECTION: insertToSorted() and reverse()

  // Bonus: Inserts a new node with value into the sorted list
  // requires: llist to be a sorted list
  // time: O(n), where n is the length of sorted list
  insertToSorted(value) {
    // YOUR CODE HERE
  }

  // Bonus: Returns a NEW, REVERSED linked list based on llist. Note that the
  // nodes must be new copies as well.
  // time: O(n), where n is the length of llist
  reverse() {
    // YOUR CODE HERE
  }
}

module.exports = LinkedList;
