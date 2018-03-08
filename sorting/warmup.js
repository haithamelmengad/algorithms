"use strict"

var sortWarmup = {};

// Write a function that takes an array, and returns true if and only if
// the array is already sorted in increasing order.
//
// ex. sortWarmup.isSorted([]) -> true
// ex. sortWarmup.isSorted([1]) -> true
// ex. sortWarmup.isSorted([-1]) -> true
// ex. sortWarmup.isSorted([0, 1]) -> true
// ex. sortWarmup.isSorted([11, 1]) -> false
// ex. sortWarmup.isSorted([0, 999]) -> true
// ex. sortWarmup.isSorted([-12, 2, 3, 6, 10]) -> true
// ex. sortWarmup.isSorted([-12, 3, 6, 10, 2]) -> false
sortWarmup.isSorted = function(array) {
  let isSorted = true;
  for (let i = 0; i < array.length-1; i++) {
    if(array[i]>array[i+1]){
      isSorted = false;
    }
  }
  return isSorted;
}

// Write a function that merges two sorted arrays and
// returns a new sorted array.
  
//
// ex. sortWarmup.mergeArrays([], []) -> []
// ex. sortWarmup.mergeArrays([1, 2], []) -> [1, 2]
// ex. sortWarmup.mergeArrays([], [1, 2]) -> [1, 2]
// ex. sortWarmup.mergeArrays([1, 3], [2]) -> [1, 2, 3]
// ex. sortWarmup.mergeArrays([1, 10], [2, 3, 11]) -> [1, 2, 3, 10, 11]
// ex. sortWarmup.mergeArrays([1, 2, 9, 10, 12], [2, 3, 11]) -> [1, 2, 2, 3, 9, 10, 11, 12]
sortWarmup.mergeArrays = function(array1, array2) {
  let mergedArray = [];
  const length = Math.max(array1.length, array2.length);
  
  for (let i = 0; i < length; i++) {
    console.log(array1[i] + " < " + array2[i] + " ?");
    if( array1[i] && array2[i]){
      if(array1[i] < array2[i]){
          mergedArray.push(array1[i]);
          mergedArray.push(array2[i]);
        } else {
          mergedArray.push(array2[i]);
          mergedArray.push(array1[i]);
        }
    
  } else
    
    if (array1[i] && !array2[i]){
        let position = mergedArray.length-1;
        while(mergedArray[position] > array1[i] ){
          position --;
        }
        mergedArray.splice(position+1, 0, array1[i]);
    } else
    if (!array1[i] && array2[i]){
      let position2 = mergedArray.length-1;
      while(mergedArray[position2] > array2[i] ){
        position2 --;
      }
      mergedArray.splice(position2+1, 0, array2[i]);
    }

  }

  return mergedArray;

}


// Write a function that finds the index of an item in a given sorted array.
// Return -1 if item is not found.
//
// This function should use a binary search to find the item.
//
// ex. sortWarmup.indexOf([], 1) -> -1
// ex. sortWarmup.indexOf([1], 1) -> 0
// ex. sortWarmup.indexOf([1], 2) -> -1
// ex. sortWarmup.indexOf([0, 1, 2, 3, 4, 6, 7], 4) -> 4
// ex. sortWarmup.indexOf([0, 1, 2, 3, 4, 6, 7], 5) -> -1
sortWarmup.indexOf = function(sortWarmup, item) {
  let datIndex = -1;
  for (let i = 0; i < sortWarmup.length; i++) {
    console.log(sortWarmup[i]);
    if(sortWarmup[i] === item){
      datIndex = i;
    }
  }
  return datIndex;
  
}
