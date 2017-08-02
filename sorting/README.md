## Interview Prep: Sorting

Concepts: **Why Sort, Binary Search, Sorting Algorithms**

1. [Warmup: Already Sorted Arrays](#warmup)
1. [Implementing Binary Search and Sorting](#implementing-binary-search-and-sorting)
1. [Programming Problems](#programming-problems)
1. [Bonus](#bonus)

There's intentionally more here than we expect you to finish for the sake of these exercises being a good study resource to return to later.

## Warmup: Already Sorted Arrays

1. Open `warmup.html` in your browser.
1. Implement the empty functions in `warmup.js` until the tests pass.

## Implementing Binary Search and Sorting

Open `sorted_array.html` in your browser and write your code in `sorted_array.js`. You will be asked to write:

1. Binary Search
1. Choice of Selection Sort or Bubble Sort
1. Merge Sort
1. (Bonus) Quick Sort

If you're interested in the bonus, we recommend that you come back to it after moving on to at least some of the next section.

## Programming Problems

If you haven't already, register for an account on [LeetCode](https://leetcode.com). We would highly recommend doing all of the selected problems in **JavaScript**.

If any of these stump you, *you should move on rather than get stuck for an hour*. It's more important you get exposed to more problems than that you bash your head against the wall over a single one all day. At the end of the day we will go over select solutions.

Many of these problems make no explicit mention of sorting, even if the best solution involves it. Train yourself to consider whether the power of sorting can help you! Youn can use [javascript's sort function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) unless the problem says otherwise.

Lastly, an example might be included with a problem where the example input is sorted despite the fact that your input is not guaranteed to be in any particular order. Some interviewers will do this intentionally wanting to see whether you will notice and/or ask for clarification or if you'll just run with a poor assumption as a result of the poor example.

### Interview Problems

1. [Array Intersection](https://leetcode.com/problems/intersection-of-two-arrays/description/)
1. [Array Intersection II](https://leetcode.com/problems/intersection-of-two-arrays-ii/description/)
1. [Valid Anagram](https://leetcode.com/problems/valid-anagram/description/)
    (There's no `String.prototype.sort`, but you can leverage `Array.prototype.sort`.)
1. [X Papers with X+ Citations Each](https://leetcode.com/problems/h-index/description/)
1. [Largest Number from Pieces](https://leetcode.com/problems/largest-number/description/)
    (Can you come up with the perfect custom comparator to sort with?)
1. [Sort Colors](https://leetcode.com/problems/sort-colors/description/)
    (Comparison-based sorting algorithms have a theoretical minimum runtime of O(n*log(n)). But in certain situations you can sort without comparing entries to each other and get an O(n) solution!)
1. [Merge Intervals](https://leetcode.com/problems/merge-intervals/description/)

### Bonus

If you've reached this point, now might be a good time to go back and implement Quick Sort in `sorted_array.js`.

1. [Sorting a Linked List](https://leetcode.com/problems/sort-list/description/)
    (If doing it in O(nlog(n)) time / O(1) space is too difficult, feel free to implement any solution you can.)

1. Radix sort and sort by anagram: Edit `sort_bonus.js` and open `sort_bonus.html`

    [Radix Sort info](http://www.cs.yale.edu/homes/aspnes/pinewiki/RadixSort.html)

1. Binary search on a sparse array: edit `sparse_search.js` and open `sparse_search.html`

    Adapted from "Cracking the Coding Interview"
1. Merge sorted arrays: edit `merge_any.js` and open `merge_any.html`
