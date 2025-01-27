//  map, filter and reduce
// what is map() ?
// map() creates a new array from calling a function for every array element. map() does not execute the function for empty elements. map() does not change the original array.

const numsOne = [1, 2, 3, 4];

const multiplyThree = numsOne.map((currentElement, index, arr) => {
  return currentElement * 3 + index;
});
console.log(multiplyThree);

// what is filter() ?
// The filter() method creates a new array filled with elements that pass a test provided by a function.

const numsTwo = [1, 2, 3, 4];

const moreThanTwo = numsTwo.filter((num) => {
  return num > 2;
});

console.log(moreThanTwo);

// what is reduce() ?
// The array reduce in JavaScript is a predefined method used to reduce an array to a single value by passing a callback function on each element of the array. It accepts a function executed on all the items of the specified array in the left-to-right sequence. The returned single value is stored in the accumulator.

const numsThree = [1, 2, 3, 4];
const sum = numsThree.reduce((acc, curr, index, arr) => {
  // accumulator is the result of the previous computation
  // if there's no initial value, it takes first element of array as initial value for accumulator
  return acc + curr;
}, 0);

console.log(sum);

//  polyfill for map()
//  Here the prototype is to do, added the myMap into the Array method

// Array.map((num, i, arr) => {});
Array.prototype.myMap = function (callBack) {
  let temp = [];
  // here this is basically means the array
  for (let i = 0; i < this.length; i++) {
    temp.push(callBack(this[i], i, this));
  }
  return temp;
};

const numsFour = [1, 2, 3, 4];

const multiplyThre = numsFour.myMap((currentElement, index, arr) => {
  return currentElement * 3 + index;
});
console.log(multiplyThre);

//  polyfill for filter()

Array.prototype.myFilter = function (callBack) {
  let temp = [];
  // here this is basically means the array
  for (let i = 0; i < this.length; i++) {
    // this[i] - is for retrive of data from the array
    if (callBack(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

const numsFive = [1, 2, 3, 4];

const moreThanTw = numsFive.myFilter((num) => {
  return num > 2;
});
console.log(moreThanTw);

//  polyfill for reduce()
// arr.reduce((acc, curr, i, arr)=> {}, initial_value)
Array.prototype.myReduce = function (callBack, initial_value) {
  var accumulator = initial_value;
  // here this is basically means the array
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator
      ? callBack(accumulator, this[i], i, this)
      : this[i];
  }
  return accumulator;
};

const numsSeven = [1, 2, 3, 4];
const sums = numsSeven.myReduce((acc, curr, index, arr) => {
  // accumulator is the result of the previous computation
  // if there's no initial value, it takes first element of array as initial value for accumulator
  return acc + curr;
}, 0);

console.log(sums);
