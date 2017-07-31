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
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Adds a new node containing value to the front of llist
  // time: O(1)
  addFront(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Adds a new node containing value to the back of llist
  // time: O(n), where n is the length of llist
  addBack(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
  }

  // Removes the node at the front of llist and returns the value of the
  // removed node. If llist is empty, return null.
  // time: O(1)
  removeFront() {
    if (!this.head) {
      return null;
    }
    let backup = this.head;
    this.head = this.head.next;
    return backup.value;
  }

  // Removes the node at the back of llist and returns the value of the removed
  // node. If llist is empty, return null.
  // time: O(n), where n is the length of llist
  removeBack() {
    if (!this.head) {
      return null;
    }
    let backup = this.head;
    if (!backup.next) { // head is only node
      this.head = null;
      return backup.value;
    }
    while (backup.next && backup.next.next) {
      backup = backup.next;
    }
    let result = backup.next;
    backup.next = null;
    return result.value;
  }

  // Returns true if llist is empty (has no nodes)
  // time: O(1)
  isEmpty() {
    return this.head === null;
  }

  // Returns the number of nodes in llist
  // time: O(n), where n is the length of llist
  length() {
    let len = 0;
    let temp = this.head;
    while (temp) {
      len++;
      temp = temp.next;
    }
    return len;
  }

  // Squares each item in llist
  // time: O(n), where n is the length of llist
  sqr() {
    let temp = this.head;
    while (temp) {
      temp.value *= temp.value;
      temp = temp.next;
    }
  }

  // Questions to think about:
  //   1. What can we do to make length() O(1)?
  //   2. What about making removeBack() O(1)?

  // BONUS SECTION: insertToSorted() and reverse()

  // Bonus: Inserts a new node with value into the sorted list
  // requires: llist to be a sorted list
  // time: O(n), where n is the length of sorted list
  insertToSorted(value) {
    if (!this.head || value < this.head.value) {
      this.addFront(value);
    } else {
      this.insertNodes(value, this.head);
    }
  }

  insertNodes(value, node) {
    if (node.next && value > node.next.value) {
      this.insertNodes(value, node.next);
    } else {
      let newNode = new Node(value);
      newNode.next = node.next;
      node.next = newNode;
    }
  }

  // Bonus: Returns a NEW, REVERSED linked list based on llist. Note that the
  // nodes must be new copies as well.
  // time: O(n), where n is the length of llist
  reverse() {
    let ll = new LinkedList();
    let temp = this.head;
    while (temp) {
      ll.addFront(temp.value);
      temp = temp.next;
    }
    return ll;
  }
}

module.exports = LinkedList;
