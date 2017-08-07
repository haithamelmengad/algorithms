// This is a Trie. We can represent search indexes using this.
// It's a tree where each node is a letter (except for the
// root node which represents empty string).
//
// A node is marked as a terminal if a word ends there.
//
// So if we insert 'HELLO' the trie will be:
//
//    H -> E -> L -> L -> *O*
//
// *O* is a terminal.
//
//
//
//
// Example of how to use our Trie
//  var t = new Trie();
//  t.insert('hello');
//  t.search('hello') -> true
//  t.search('hell') -> false
//  t.search('hel') -> false
//  t.search('he') -> false
//  t.search('h') -> false
//
//  t.insert('he') // Insert 'he' now
//  t.search('he') -> true
//  t.search('hel') -> false
//  t.search('h') -> false
class Trie {
  constructor(letter) {
    this.letter = letter;
    this.children = {};
    this.terminal = false;
  }

  // Write a function that searches trie and returns true if and only if the
  // exact given word has been inserted before. Notice in the trie above

  // H -> E -> L -> L -> *O*

  // Trie.search("HELLO") is true but Trie.search("HELL") is false although
  // the letters all appear in the trie.
  search(word) {
    // YOUR CODE HERE
  }

  // Write a function that inserts given word into the trie.
  insert(word) {
    // YOUR CODE HERE
  }

  // Write a function that removes given word from the trie.
  // You can do this by setting 'terminal = false' for the right node.
  //
  // If the word is not already stored, you don't need to do anything.
  // You don't need to remove branches of the tree that are no longer
  // used.
  remove(word) {
    // YOUR CODE HERE
  }

  // Write a function that counts all the words in this trie and
  // returns the count;
  //
  // Only nodes that are terminals should counted.
  countWords() {
    // YOUR CODE HERE
  }

  // Write a method that takes a string and returns the number of words
  // that start with that prefix.
  searchPrefix(prefix) {
    // YOUR CODE HERE
  }
}
