'use strict';

const Stack = require('./stack');

describe('Stack', () => {

  let aStack;
  beforeEach(() => {
    aStack = new Stack();
  });

  let toArray = l => {
    let array = [];
    if (Array.isArray(l.data)) {
      return l.data;
    }
    let temp = l.data.head;
    while (temp) {
      array.push(temp.value);
      temp = temp.next;
    }
    return array;
  };

  describe('Stack Basics', () => {
    it('is empty when created', () => {
      expect(toArray(aStack).length).toBe(0);
    });
  });

  // adds an element with value onto the top of the stack
  // time: O(1)
  // push(value) { }
  describe('push()', () => {
    it('contains the number of items added', () => {
      aStack.push(1);
      aStack.push(2);
      expect(toArray(aStack).length).toBe(2);
    });

    it('adds a value to the top of the stack', () => {
      aStack.push(10);
      expect(toArray(aStack)).toEqual([10]);
    });

    it('maintains the right order', () => {
      aStack.push(1);
      aStack.push(2);
      aStack.push(3);
      expect(toArray(aStack)).toEqual([3, 2, 1]);
    });
  });

  // removes the top element of the stack and returns that value
  // time: O(1)
  // pop() { }
  describe('pop()', () => {
    it('returns null for an empty stack', () => {
      expect(toArray(aStack).length).toBe(0);
      let temp = aStack.pop();
      expect(temp).toBe(null);
      expect(toArray(aStack).length).toBe(0);
    });

    it('contains the number of items after popping', () => {
      aStack.push(1);
      aStack.push(2);
      let temp = aStack.pop();
      expect(toArray(aStack).length).toBe(1);
    });

    it('returns the value of removed item after popping', () => {
      aStack.push(1);
      aStack.push(2);
      let temp = aStack.pop();
      expect(temp).toBe(2);
    });

    it('maintains the right order', () => {
      aStack.push(1);
      aStack.push(2);
      aStack.push(3);
      aStack.push(4);
      // 4, 3, 2, 1
      let temp1 = aStack.pop();
      expect(toArray(aStack).length).toBe(3);
      let temp2 = aStack.pop();
      expect(toArray(aStack).length).toBe(2);
      let temp3 = aStack.pop();
      expect(toArray(aStack).length).toBe(1);
      let temp4 = aStack.pop();
      expect(toArray(aStack).length).toBe(0);
      expect(temp1).toBe(4);
      expect(temp2).toBe(3);
      expect(temp3).toBe(2);
      expect(temp4).toBe(1);
    });
  });

  // returns true if the stack is empty, and false otherwise
  // time: O(1)
  // isEmpty() { }
  describe('isEmpty()', () => {
    it('returns true if stack is empty', () => {
      expect(aStack.isEmpty()).toBe(true);
    });

    it('returns false if stack is not empty', () => {
      aStack.push(1);
      expect(aStack.isEmpty()).toBe(false);
    });

    it('maintains the right order', () => {
      aStack.push(1);
      aStack.pop();
      expect(aStack.isEmpty()).toBe(true);

      aStack.push(1);
      aStack.pop();
      aStack.push(2);
      expect(aStack.isEmpty()).toBe(false);
    });
  });

  // returns the top element of the stack. returns null if the stack is empty
  // time: O(1)
  // top() { }
  describe('top()', () => {
    it('returns null for an empty stack', () => {
      expect(toArray(aStack).length).toBe(0);
      let temp = aStack.top();
      expect(temp).toBe(null);
      expect(toArray(aStack).length).toBe(0);
    });

    it('returns the top element of the stack', () => {
      aStack.push(1);
      aStack.push(2);
      let temp = aStack.top();
      expect(temp).toBe(2);
    });

    it('do not remove elements from the stack', () => {
      aStack.push(1);
      aStack.push(2);
      let temp = aStack.top();
      expect(toArray(aStack).length).toBe(2);
      aStack.top();
      expect(toArray(aStack).length).toBe(2);
    });

    it('maintains the right order', () => {
      aStack.push(1);
      aStack.push(2);
      aStack.push(3);
      aStack.push(4);
      // 4, 3, 2, 1
      let temp1 = aStack.top();
      expect(toArray(aStack).length).toBe(4);
      aStack.pop();
      let temp2 = aStack.top();
      expect(toArray(aStack).length).toBe(3);
      aStack.pop();
      let temp3 = aStack.top();
      expect(toArray(aStack).length).toBe(2);
      aStack.pop();
      let temp4 = aStack.top();
      expect(toArray(aStack).length).toBe(1);
      aStack.pop();
      expect(toArray(aStack).length).toBe(0);
      expect(temp1).toBe(4);
      expect(temp2).toBe(3);
      expect(temp3).toBe(2);
      expect(temp4).toBe(1);
    });
  });
});
