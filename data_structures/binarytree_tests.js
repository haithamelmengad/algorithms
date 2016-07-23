"use strict";

describe("binary tree", function() {
  describe("isBalanced", function() {
    var balancedTree, unbalancedTree;
    beforeEach(function() {
      balancedTree = new Tree('+',
        // Depth: 3
        new Tree(6,
          new Tree(5,
            new Tree(5)),
          new Tree(10)),
        // Depth: 4
        new Tree('-',
          // Depth: 3
          new Tree('+',
            new Tree(4),
            new Tree('*',
              new Tree(3),
              new Tree(0)
            )
          ),
          // Depth: 3
          new Tree('/',
            new Tree('+',
              new Tree(3),
              new Tree(4)
            ),
            new Tree(5)
          )
        )
      );

      unbalancedTree = new Tree('+',
        new Tree(6),
        new Tree('-',
          new Tree('+',
            new Tree(4),
            new Tree('*',
              new Tree(3),
              new Tree(0)
            )
          ),
          new Tree('/',
            new Tree('+',
              new Tree(3),
              new Tree(4)
            ),
            new Tree(5)
          )
        )
      );
    });
    it("returns true for a balanced tree", function() {
      expect(balancedTree.isBalanced()).toBe(true);
    });
    it("returns false for an unbalanced tree", function() {
      expect(unbalancedTree.isBalanced()).toBe(false);
    });
  });

  describe("firstCommonAncestor", function() {
    var leftTree, rightTree, ancestorTree, rootTree;
    beforeEach(function() {
      leftTree = new Tree(6,
        new Tree(5),
        new Tree(2,
          new Tree(1),
          new Tree(4)));

      rightTree = new Tree(2,
        new Tree(9,
          new Tree(3),
          new Tree(3)),
        new Tree(0));

      ancestorTree = new Tree(9,
        leftTree,
        new Tree(1,
          new Tree(4),
          new Tree(1,
            new Tree(6),
            rightTree)));

      rootTree = new Tree(10,
        new Tree(5,
          new Tree(4,
            new Tree(2),
            new Tree(1))),
        ancestorTree);
    });
    it("returns false if root is empty", function() {
      expect(firstCommonAncestor(undefined, leftTree, rightTree)).toBe(false);
    });
    it("returns false if no common ancestor", function() {
      expect(firstCommonAncestor(leftTree, leftTree, rightTree)).toBe(false);
    });
    it("returns root if root is common ancestor", function() {
      expect(firstCommonAncestor(ancestorTree, leftTree, rightTree)).toBe(ancestorTree);
    });
    it("finds the ancestor of two trees", function() {
      expect(firstCommonAncestor(rootTree, leftTree, rightTree)).toBe(ancestorTree);
    });
  });
});
