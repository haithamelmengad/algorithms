"use strict";

describe("KeyValueStore tests", function() {

  it("Simple get/put test", function() {
    var h = new KeyValueStore();
    var o = {};
    h.put(o, "A value");
    expect("A value").toBe(h.get(o));
  });

  it("Different keys, numbers, objects", function() {
    var h = new KeyValueStore();
    var o1 = 34;
    var o2 = "str";
    h.put(o1, "First");
    h.put(o2, "Second");
    expect("First").toBe(h.get(o1));
    expect("Second").toBe(h.get(o2));
  });

  it("Should replace", function() {
    var h = new KeyValueStore();
    var o = "RandomKey";
    h.put(o, "Test 1");
    h.put(o, "Test 2");
    expect(h.get(o)).toBe("Test 2");
    expect(h.get(o)).toBe("Test 2");
    //  expect(h.getSize()).toBe(1);
  });

});

describe("Size Tests by putting and deleting objects", function() {

  it("Starting size should be 0", function() {
    var h = new KeyValueStore();
    expect(h.getSize()).toBe(0);
  });

  it("Deleting objects and size", function() {
    var h = new KeyValueStore();
    var o = {};
    h.put(o, "Test");
    h.delete(o);
    expect(h.getSize()).toBe(0);
  });

  it("Getting a deleted object", function() {
    var h = new KeyValueStore();
    var o = {};
    h.put(o, "Test");
    h.delete(o);
    expect(h.get(o)).toBe(undefined);
  });

  it("Removing an exact element", function() {
    var h = new KeyValueStore();
    var o1 = "something", o2 = "somethingelse";
    h.put(o1, "Test 1");
    h.put(o2, "Test 2");
    h.delete(o1);
    expect(h.getSize()).toBe(1);
    expect(h.get(o1)).toBe(undefined);

  });
});


describe("Iterators", function() {
  it("Keys, ContainsKey", function() {
    var h = new KeyValueStore();
    h.put(1, "Test 1");
    h.put(2, "Test 2");
    h.put(3, "Test 3");
    var count = 0;
    h.keys(function(key){
      count++;
      expect(h.containsKey(key)).toBe(true);
    });
    expect(count).toBe(3);
  });
  it("Values, ContainsValues + key values", function() {
    var h = new KeyValueStore();
    h.put(1, "Test 1");
    h.put(2, "Test 2");
    h.put(3, "Test 3");
    var count = 0;
    h.values(function(value){
      count++;
      expect(h.containsValue(value)).toBe(true);
    });
    h.keysValues(function(keyvalues){
      count++;
      expect(h.containsKey(keyvalues[0])).toBe(true);
      expect(h.containsValue(keyvalues[1])).toBe(true);
    });
    expect(count).toBe(6);
  });
});
