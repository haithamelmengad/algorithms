'use strict';

const LinkedList = require('./linked_list');

describe('Linked Lists', () => {
  let aList;
  beforeEach(() => {
    aList = new LinkedList();
  });

  let toArray = l => {
    let array = [];
    let temp = l.head;
    while (temp) {
      array.push(temp.value);
      temp = temp.next;
    }
    return array;
  };

  describe('Linked List Basics', () => {
    it('is empty when created', () => {
      expect(toArray(aList).length).toBe(0);
    });
  });

  // Adds a new node containing value to the front of llist
  // time: O(1)
  // addFront(value) {};
  describe('addFront()', () => {
    it('contains the number of items added', () => {
      aList.addFront(1);
      aList.addFront(1);
      expect(toArray(aList).length).toBe(2);
    });

    it('adds a new node containing value to the front', () => {
      aList.addFront(10);
      expect(toArray(aList)).toEqual([10]);
    });

    it('maintains the right order', () => {
      aList.addFront(1);
      aList.addFront(2);
      aList.addFront(3);
      expect(toArray(aList)).toEqual([3, 2, 1]);
    });
  });

  // Adds a new node containing value to the back of llist
  // time: O(n), where n is the length of llist
  // addBack(value) { }
  describe('addBack()', () => {
    it('contains the number of items added', () => {
      aList.addBack(1);
      aList.addBack(1);
      expect(toArray(aList).length).toBe(2);
    });

    it('adds a new node containing value to the back', () => {
      aList.addBack(10);
      expect(toArray(aList)).toEqual([10]);
    });

    it('maintains the right order', () => {
      aList.addBack(1);
      aList.addBack(2);
      aList.addBack(3);
      expect(toArray(aList)).toEqual([1, 2, 3]);
    });
  });

  // Removes the node at the front of llist and returns the value of the
  // removed node. If llist is empty, return null.
  // time: O(1)
  // removeFront() { }
  describe('removeFront()', () => {
    it('returns null for an empty list', () => {
      expect(toArray(aList).length).toBe(0);
      let temp = aList.removeFront();
      expect(temp).toBe(null);
      expect(toArray(aList).length).toBe(0);
    });

    it('contains the number of items after removing', () => {
      aList.addBack(1);
      aList.addBack(2);
      let temp = aList.removeFront();
      expect(toArray(aList).length).toBe(1);
    });

    it('returns the value of removed node after removing', () => {
      aList.addBack(1);
      aList.addBack(2);
      let temp = aList.removeFront();
      expect(temp).toBe(1);
    });

    it('maintains the right order', () => {
      aList.addFront(1);
      aList.addBack(2);
      aList.addFront(3);
      aList.addBack(4);
      // 3, 1, 2, 4
      let temp1 = aList.removeFront();
      expect(toArray(aList).length).toBe(3);
      let temp2 = aList.removeFront();
      expect(toArray(aList).length).toBe(2);
      let temp3 = aList.removeFront();
      expect(toArray(aList).length).toBe(1);
      let temp4 = aList.removeFront();
      expect(toArray(aList).length).toBe(0);
      expect(temp1).toBe(3);
      expect(temp2).toBe(1);
      expect(temp3).toBe(2);
      expect(temp4).toBe(4);
    });
  });

  // Removes the node at the back of llist and returns the value of the removed
  // node. If llist is empty, return null.
  // time: O(n), where n is the length of llist
  // removeBack() { }
  describe('removeBack()', () => {
    it('returns null for an empty list', () => {
      expect(toArray(aList).length).toBe(0);
      let temp = aList.removeBack();
      expect(temp).toBe(null);
      expect(toArray(aList).length).toBe(0);
    });

    it('contains the number of items after removing', () => {
      aList.addBack(1);
      aList.addBack(2);
      let temp = aList.removeBack();
      expect(toArray(aList).length).toBe(1);
    });

    it('returns the value of removed node after removing', () => {
      aList.addBack(1);
      aList.addBack(2);
      let temp = aList.removeBack();
      expect(temp).toBe(2);
    });

    it('maintains the right order', () => {
      aList.addFront(1);
      aList.addBack(2);
      aList.addFront(3);
      aList.addBack(4);
      // 3, 1, 2, 4
      let temp1 = aList.removeBack();
      expect(toArray(aList).length).toBe(3);
      let temp2 = aList.removeBack();
      expect(toArray(aList).length).toBe(2);
      let temp3 = aList.removeBack();
      expect(toArray(aList).length).toBe(1);
      let temp4 = aList.removeBack();
      expect(toArray(aList).length).toBe(0);
      expect(temp1).toBe(4);
      expect(temp2).toBe(2);
      expect(temp3).toBe(1);
      expect(temp4).toBe(3);
    });
  });

  // Returns true if llist is empty (has no nodes)
  // time: O(1)
  // isEmpty() { }
  describe('isEmpty()', () => {
    it('returns true if list is empty', () => {
      expect(aList.isEmpty()).toBe(true);
    });

    it('returns false if list is not empty', () => {
      aList.addBack(1);
      expect(aList.isEmpty()).toBe(false);
    });

    it('maintains the right order', () => {
      aList.addBack(1);
      aList.removeBack();
      expect(aList.isEmpty()).toBe(true);

      aList.addBack(1);
      aList.removeBack();
      aList.addBack(2);
      expect(aList.isEmpty()).toBe(false);
    });
  });

  // Returns the number of nodes in llist
  // time: O(n), where n is the length of llist
  // length() { }
  describe('length()', () => {
    it('returns 0 for an empty list', () => {
      expect(aList.length()).toBe(0);
    });

    it('returns the number of nodes in list', () => {
      aList.addBack(1);
      expect(aList.length()).toBe(1);
    });

    it('maintains the right order', () => {
      aList.addBack(1);
      aList.removeBack();
      expect(aList.length()).toBe(0);

      aList.addBack(1);
      aList.removeBack();
      aList.addBack(2);
      expect(aList.length()).toBe(1);

      aList.addBack(1);
      aList.addFront(2);
      expect(aList.length()).toBe(3);
    });
  });

  // Squares each item in llist
  // time: O(n), where n is the length of llist
  // sqr() { }
  describe('sqr()', () => {
    it('does nothing to an empty list', () => {
      aList.sqr();
      expect(toArray(aList)).toEqual([]);
    });

    it('squares each item in list', () => {
      aList.addBack(0);
      aList.addBack(4);
      aList.addBack(2);
      aList.addBack(9);
      aList.sqr();
      expect(toArray(aList)).toEqual([0, 16, 4, 81]);
    });

    it('should not create new nodes', () => {
      aList.addBack(0);
      aList.addBack(4);
      aList.addBack(2);
      aList.addBack(9);
      let node1 = aList.head;
      let node2 = aList.head.next;
      let node3 = aList.head.next.next;
      let node4 = aList.head.next.next.next;
      aList.sqr();
      expect(node1).toBe(aList.head);
      expect(node2).toBe(aList.head.next);
      expect(node3).toBe(aList.head.next.next);
      expect(node4).toBe(aList.head.next.next.next);
    });
  });

  // Bonus: Inserts a new node with value into the sorted list
  // requires: llist to be a sorted list
  // time: O(n), where n is the length of sorted list
  // insertToSorted(value) { }
  describe('[BONUS] insertToSorted()', () => {
    it('adds a new node to list', () => {
      aList.insertToSorted(1);
      expect(toArray(aList)).toEqual([1]);
    });

    it('adds a new node to the right position', () => {
      aList.addBack(0);
      aList.addBack(5);
      aList.addBack(9);
      aList.addBack(10);
      aList.addBack(20);
      aList.insertToSorted(-9);
      expect(toArray(aList)).toEqual([-9, 0, 5, 9, 10, 20]);
      aList.insertToSorted(1);
      expect(toArray(aList)).toEqual([-9, 0, 1, 5, 9, 10, 20]);
      aList.insertToSorted(8);
      expect(toArray(aList)).toEqual([-9, 0, 1, 5, 8, 9, 10, 20]);
      aList.insertToSorted(30);
      expect(toArray(aList)).toEqual([-9, 0, 1, 5, 8, 9, 10, 20, 30]);
      aList.insertToSorted(10);
      expect(toArray(aList)).toEqual([-9, 0, 1, 5, 8, 9, 10, 10, 20, 30]);
    });
  });

  // Bonus: Returns a NEW, REVERSED linked list based on llist. Note that the
  // nodes must be new copies as well.
  // time: O(n), where n is the length of llist
  // reverse() { }
  describe('[BONUS] reverse()', () => {
    it('does nothing to an empty list', () => {
      aList.reverse();
      expect(toArray(aList).length).toBe(0);
    });

    it('does nothing to a list with one element', () => {
      aList.addBack(1);
      aList.reverse();
      expect(toArray(aList)).toEqual([1]);
    });

    it('reverses a multi-element list', () => {
      aList.addBack(0);
      aList.addBack(1);
      aList.addBack(2);
      aList.addBack(3);
      aList.addBack(5);
      expect(toArray(aList.reverse())).toEqual([5, 3, 2, 1, 0]);
    });

    it('does not modify the original list', () => {
      aList.addBack(0);
      aList.addBack(1);
      aList.addBack(2);
      aList.addBack(3);
      aList.addBack(5);
      expect(toArray(aList.reverse())).toEqual([5, 3, 2, 1, 0]);
      expect(toArray(aList)).toEqual([0, 1, 2, 3, 5]);
    });

    it('creates new copies of nodes', () => {
      aList.addBack(0);
      aList.addBack(1);
      aList.addBack(2);
      aList.addBack(3);
      aList.addBack(5);
      let item1 = aList.head;
      let item2 = aList.head.next;
      let item3 = aList.head.next.next;
      let item4 = aList.head.next.next.next;
      let item5 = aList.head.next.next.next.next;
      let reversed = aList.reverse();
      let temp1 = reversed.head;
      let temp2 = reversed.head.next;
      let temp3 = reversed.head.next.next;
      let temp4 = reversed.head.next.next.next;
      let temp5 = reversed.head.next.next.next.next;
      expect(toArray(reversed)).toEqual([5, 3, 2, 1, 0]);
      expect(toArray(aList)).toEqual([0, 1, 2, 3, 5]);
      expect(temp1).not.toBe(item5);
      expect(temp2).not.toBe(item4);
      expect(temp3).not.toBe(item3);
      expect(temp4).not.toBe(item2);
      expect(temp5).not.toBe(item1);
      expect(temp1.value).toBe(item5.value);
      expect(temp2.value).toBe(item4.value);
      expect(temp3.value).toBe(item3.value);
      expect(temp4.value).toBe(item2.value);
      expect(temp5.value).toBe(item1.value);
    });
  });
});
