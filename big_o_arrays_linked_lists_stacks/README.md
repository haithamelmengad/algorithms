## Interview Prep: Big O notation, Arrays, Linked Lists, and Stacks

Concepts: **Big O notation, Arrays, Linked Lists, and Stacks**

Hello everyone! We'll split today's schedule into 3 different main sections (excluding the bonuses):

1. [Warmup Quiz: Big O Notation](#warmup-quiz)
1. [Implementing Data Structures from scratch](#implementing-data-structures)
1. [Programming Problems (Using Arrays, Linked Lists, and Stacks)](#programming-problems)
1. [Bonus!](#bonus-1)

## Warmup Quiz

> Try not to spend more than 15 minutes for this.

1. Skim through [https://www.interviewcake.com/article/java/big-o-notation-time-and-space-complexity](https://www.interviewcake.com/article/java/big-o-notation-time-and-space-complexity)
1. [I'm ready!](https://goo.gl/forms/KUdCZ2tYnqK1c1Yk1)

## Implementing Data Structures

Before moving on, do `npm install -g jasmine`.

1. Singly Linked Lists: `linked_list.js`.
	> Run `jasmine linked_list.spec.js` to test.

2. Stacks: `stack.js`.
	> Run `jasmine stack.spec.js` to test.

## Programming Problems

> Try to complete the previous exercises (implementing singly linked lists and stacks) before moving on.

Register for an account on [LeetCode](https://leetcode.com). We would highly recommend doing all of the selected problems in **JavaScript**.

### Warm Up

1. [Remove Element](https://leetcode.com/problems/remove-element/tabs/description)
1. [Search Insert Position](https://leetcode.com/problems/search-insert-position/tabs/description)

### Part 1: Arrays

1. [Rotate Array](https://leetcode.com/problems/rotate-array/tabs/description)
1. [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/tabs/description)
1. [Diagonal Traversal](https://leetcode.com/problems/diagonal-traverse/tabs/description)

### Part 2: Stacks

For these questions, use JavaScript Arrays as Stacks.

1. [Min Stack](https://leetcode.com/problems/min-stack/tabs/description)
1. [Valid Parenthesis](https://leetcode.com/problems/valid-parentheses/tabs/description)
1. [Simplify Path](https://leetcode.com/problems/simplify-path/tabs/description)

### Part 3: Linked Lists

1. [Delete Node in a Linked List](https://leetcode.com/problems/delete-node-in-a-linked-list/tabs/description)
1. [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/tabs/description) (Try to do it one pass)

If you're done with all of these, feel free to head to the [bonus](#bonus-1) section. 😄🎉

## Bonus #1

Ranked from easiest to hardest:

1. [Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/description/)
1. [Rotate Matrix](https://leetcode.com/problems/rotate-image/tabs/description)
1. [Combination Sum](https://leetcode.com/problems/combination-sum/tabs/description)
1. [Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/tabs/description)

## Bonus #2

Also, here are a few questions to try out. Note that these are actual in-person interview questions. There are no tests for these questions. Feel free to talk to a TA about your approach.

1. **Quora**: Given a array with numbers which are increasing in beginning and decreasing in the end, find the maximum number in O(log n). Examples of arrays are [1,2,3], [1,2,3,4,5,3,2], and [4,2,1].
1. **Wish**: Given an array of unique integers, return list of permutations.
2. **Wish**: Given an array of unique integers, return list of all subsets.
1. **Google**: Given an array and a value `x`, remove all instances of that `x` **in place** and return the new length. The order of elements can be changed.
1. **Google**: Check if a number is rotatable 180 degrees, i.e. the same after rotation. Examples are rotations of 916 and 69. (Think about digits 0, 1, 6, 8, and 9.)
1. **Bloomberg**: Given an array and the number `k`, return the `k` smallest elements in the array. (Note that k is not referring to the position (k-th smallest), but to the total number of elements instead.)
