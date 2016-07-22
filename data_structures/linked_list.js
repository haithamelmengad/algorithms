"use strict";

// LINKED LISTS

// A linked list is one of the simplest, most useful, and most common data
// structures consisting of a set of nodes which each contain a piece of
// data and a link to the next element.

// Below you'll find a barebones implementation of a linked list (it only
// allows you to insert new items, and to convert the linked list into a
// Javascript array).

// Fill in the reverse() method, below.

var list = function () {
  var self = this, first = null, last = null;

  // Implement a reverse method. It should return a new, reversed linked list.
  self.reverse = function () {

  };

  self.insert = function (value) {
    var node = new Node(value);
    if (first == null) {
      first = last = node;
    } else {
      var head = first;
      while (head.next != null) {
        head = head.next;
      }
      head.next = node;
      last = head.next;
    }
  };

  var Node = function (value) {
    this.value = value;
    this.next = null;
  };

  return self;
};

window.list = list;
