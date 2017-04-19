"use strict";
// Write a function that takes an array of objects representing people born
// between the years 1900-2000 (inclusive) and returns the year when most people
// were alive. Assume people are born in the beginning of the year and die at
// the end of the year. If there are multiple years with the max number of
// people alive, you can return any one of them.

var _ = require('underscore');

function mostAlive(people) {
  var maxYear;
  var maxPeople;
  for (var i = 1900; i <= 2000; i++) {
    var alive = people.map(person => (
      (person.birth <= i && i <= person.death) ? 1 : 0)
    ).reduce((a, b) => (a + b));
    if (! maxYear || alive > maxPeople) {
      maxYear = i;
      maxPeople = alive;
    }
  }
  return maxYear;
}

function mostAliveSorted(people) {
  var births = _.sortBy(people.map(person => person.birth));
  var deaths = _.sortBy(people.map(person => person.death));
  var birthsIndex = 0, deathsIndex = 0;
  var alive = 0;
  var maxYear;
  var maxPeople;
  var year;

  while (birthsIndex < births.length || deathsIndex < deaths.length) {
    if (birthsIndex >= births.length) {
      alive--;
      year = deaths[deathsIndex++];
    } else if (deathsIndex >= deaths.length) {
      alive++;
      year = births[birthsIndex++];
    } else if (births[birthsIndex] < deaths[deathsIndex]) {
      alive++;
      year = births[birthsIndex++];
    } else {
      alive--;
      year = deaths[deathsIndex++];
    }

    if (! maxYear || alive > maxPeople) {
      maxYear = year;
      maxPeople = alive;
    }
  }
  return maxYear;
}

var people = [
  {birth: 1921, death: 1922},
  {birth: 1901, death: 1924},
  {birth: 1902, death: 1950},
  {birth: 1920, death: 1960},
  {birth: 1950, death: 1985},
  {birth: 1980, death: 2000},
  {birth: 1902, death: 1955}
];

console.log(mostAlive(people));
console.log(mostAliveSorted(people));
