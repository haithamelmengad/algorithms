"use strict";

// LINKED LISTS

// A linked list is one of the simplest, most useful, and most common data
// structures consisting of a set of nodes which each contain a piece of
// data and a link to the next element.

// Below you'll find a barebones implementation of a linked list (it only
// allows you to insert new items, and to convert the linked list into a
// Javascript array).

// Fill in the reverse() method, below.

var Node = function (value) {
  this.value = value;
  this.next = null;
};

var list = function () {
  this.first = null;
  this.last = null;
};

// Implement a reverse method. It should return a new, reversed linked list.
list.prototype.reverse = function () {
  var head = this.first;
  var array = [];
  while (head != null) {
    array.push(head.value);
    head = head.next;
  }
  var newList = new list();
  while (array.length) {
    newList.insert(array.pop());
  }
  return newList;
};

list.prototype.insert = function (value) {
  var node = new Node(value);
  if (this.first == null) {
    this.first = this.last = node;
  } else {
    var head = this.first;
    while (head.next != null) {
      head = head.next;
    }
    head.next = node;
    this.last = head.next;
  }
};

window.list = list;
