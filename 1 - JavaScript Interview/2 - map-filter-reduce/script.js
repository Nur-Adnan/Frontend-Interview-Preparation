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

// Question 7 : map vs foreach

let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

// Q1 - Return only the names of students in capital

// Solution 1 : Traditional for() loop

let namesOne = [];
for (let index = 0; index < students.length; index++) {
  namesOne.push(students[index].name.toUpperCase());
}

console.log(namesOne);

// Solution 2 : forEach()
let namesTwo = [];
students.forEach((student) => {
  namesTwo.push(student.name.toUpperCase());
});

console.log(namesTwo);

// Solution 3 : map()
let namesThree = students.map((stu) => stu.name.toUpperCase());
console.log(namesThree);

// Q2 - we want to get the details of students who scored more than 60 marks.

let namesFour = students.filter((stu) => stu.marks > 60);
console.log(namesFour);

// Q3 - Get the details of students who scored more than 60 marks and have rollNumber greater than 15.

let namesFive = students.filter((stu) => stu.marks > 60 && stu.rollNumber > 20);
console.log(namesFive);

// Q4 - Sum total of the marks of the students

let totalMarks = students.reduce((acc, emp) => acc + emp.marks, 0);
console.log(totalMarks);

// Q5 - Get only the names of the students who scored more than 60 marks

//  all the functions allow chaining
let namesEight = students
  .filter((stu) => stu.marks > 60)
  .map((stu) => stu.name);
console.log(namesEight);

// Q6 - print the total marks of the students with marks greater than 60 after 20 marks has been added to those students who scored less than 60.

let totalMark = students
  .map(function (stu) {
    if (stu.marks < 60) {
      stu.marks += 20;
    }
    return stu;
  })
  .filter((stu) => stu.marks > 60)
  .reduce((acc, curr) => acc + curr.marks, 0);

console.log(totalMark);
