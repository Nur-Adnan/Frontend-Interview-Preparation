//  map, filter and reduce
// what is map() ?
// map() creates a new array from calling a function for every array element. map() does not execute the function for empty elements. map() does not change the original array.

const nums = [1, 2, 3, 4];

const multiplyThree = nums.map((currentElement, index, arr) => {
  return currentElement * 3 + index;
});
console.log(multiplyThree);
