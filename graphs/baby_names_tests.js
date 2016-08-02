"use strict";

describe("babyNamePopularity()", function() {
  var freq = babyNamePopularity(
      { John: 15, Jon: 12, Chris: 13, Kris: 4, Christopher: 19},
      [['Jon', 'John'],
      ['John', 'Johnny'],
      ['Chris', 'Kris'],
      ['Chris', 'Christopher']]);

  var freq = babyNamePopularity(
      { John: 15, Jon: 12, Chris: 13, Kris: 4, Christopher: 19},
      [['Jon', 'John'],
      ['John', 'Johnny'],
      ['Chris', 'Kris'],
      ['Chris', 'Christopher']]);

  var expectedFreq = [
    [['Jon', 'John', 'Johnny'], 27],
    [['Chris', 'Kris', 'Christopher'], 36]
  ];

  expectedFreq.forEach(function([names, num]) {
    it(`${JSON.stringify(names)} -> ${num}`, function() {
      expect(names.map(name => freq[name]).indexOf(num) > -1).toBe(true);
    });
  });
});
