"use strict";

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