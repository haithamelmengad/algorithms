"use strict";

// Part 1. KeyValueStore

// In this exercise we're going to build a KeyValueStore, something that allows us
// to associate string keys with values of any type. JavaScript objects already work
// this way! Data structures that allow us to associate keys with values are called
// Associative Arrays.
// Hint: You can use a JavaScript object
class KeyValueStore {
  constructor() {
    // YOUR CODE HERE
  }

  // Write a function that adds new (key,value) pairs to the store.
  // If the the store is empty -> kvs.pairs = {}
  // You should be able to pass anything you want as keys and values: numbers, strings
  // and even objects! After calling:
  // kvs.put("McDonalds", 12)
  // kvs.put("Subway", 2)
  // kvs.put('53', 3)
  // kvs.put('Other key', 'Other Value')
  // Then the store kvs.pairs should have -> { '53': 3, McDonalds: 12, Subway: 2, 'Other key': 'Other Value' }
  put(key, value) {
    // YOUR CODE HERE
  }

  // Write a function that checks if the store contains a specific key;
  // It should receive a key of any type: object, number, string
  // And return true or false if the object has the key.
  containsKey(key) {
    // YOUR CODE HERE
  }

  // Write a function that gets the values for a given key.
  // It should receive the value of key as an argument
  // And return either the key, or undefined if it is not on the store.
  get(key) {
    // YOUR CODE HERE
  }

  // Write a function that returns how many items we have in store.
  // It shouldn't take arguments, and it should return a number.
  getSize() {
    // YOUR CODE HERE
  }

  // This function is very similar to containsKey(key), but this time the other way
  // around. It should receive a value, and search for the value in all values
  // return true if it is found, false otherwise.
  containsValue(value) {
    // YOUR CODE HERE
  }

  // Implement a function that deletes a certain (key,value) pair.
  // The function receives the key and completely deletes the pair.
  // It should return true if the object was found and deleted, false if not.
  // *Note: have in mind that you should decrease the length of the array too if you
  // are able to delete a value
  delete(key) {
    // YOUR CODE HERE
  }

  // Write a forEach style iterator for all keys in the HashTable
  // that takes a function fn and calls it with each key: fn(key);
  keys(fn) {
    // YOUR CODE HERE
  }

  // Write a forEach style iterator for all values in the HashTable
  // that takes a function fn and calls it with each value: fn(value);
  values(fn) {
    // YOUR CODE HERE
  }

  // Write a forEach style iterator for all keys & values in the
  // HashTable that takes a function 'fn'.
  // fn will be called with [key, value], a two item array where
  // first item is the key and the second item is the value: fn([key, value])
  keysValues(fn) {
    // YOUR CODE HERE
  }
}
