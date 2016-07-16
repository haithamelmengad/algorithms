"use strict";

describe("sortBonus.radixSort()", function() {
  it("sortBonus.radixSort([]) -> []", function() {
    expect(sortBonus.radixSort([]) ).toEqual([]);
  });
  it("sortBonus.radixSort([1,2,3]) -> [1,2,3]", function() {
    expect(sortBonus.radixSort([1,2,3]) ).toEqual([1,2,3]);
  });
  it("sortBonus.radixSort([2,2,2]) -> [2,2,2]", function() {
    expect(sortBonus.radixSort([2,2,2]) ).toEqual([2,2,2]);
  });
  it("sortBonus.radixSort([3,2,1,2,4]) -> [1,2,2,3,4]", function() {
    expect(sortBonus.radixSort([3,2,1,2,4]) ).toEqual([1,2,2,3,4]);
  });
  it("sortBonus.radixSort([3, 2, 1]) -> [1, 2, 3]", function() {
    expect(sortBonus.radixSort([3, 2, 1]) ).toEqual([1, 2, 3]);
  });
  it("sortBonus.radixSort([3, 2, 2, 1]) -> [1, 2, 2, 3]", function() {
    expect(sortBonus.radixSort([3, 2, 2, 1]) ).toEqual([1, 2, 2, 3]);
  });
  it("sortBonus.radixSort() works on randomly shuffed 10000 item array", function() {
    var input = _.shuffle(_.range(10000));
    expect(sortBonus.radixSort(input)).toEqual(_.range(10000));
  });
});

function normalize(str) {
	var letters = str.split('');
	letters.sort();
	return letters.join('');
}

function checkAnagrams(arr) {
	var cur = null;
	var seen = {};
	for (var i of arr) {
		i = normalize(i);
		if (cur === null || cur !== i) {
			if (_.has(seen, i)) {
				return false;
			}
			seen[i] = true;
			cur = i;
		}
	}
	return true;
}

describe("sortBonus.groupAnagrams()", function() {
	var testCases = [
		[],
		['a', 'a', 'b', 'c', 'd', 'e', 'f', 'e', 'g'],
		['aa', 'a', 'b', 'aa', 'bb', 'a', 'aa'],
		['aa', 'aa', 'ab', 'ba', 'c'],
		['aa', 'aa', 'ab', 'ba', 'c', 'abc', 'bac', 'cab']
	];

	testCases.forEach(function(testCase) {
		var shuf = _.shuffle(testCase);
		var testCaseStr = JSON.stringify(shuf);
		it(testCaseStr, function() {
			expect(checkAnagrams(sortBonus.groupAnagrams(shuf))).toBe(true);
		});
	});
});
