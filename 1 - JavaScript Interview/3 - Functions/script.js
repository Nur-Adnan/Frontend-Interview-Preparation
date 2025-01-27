// function is Js
// What is function Declaration, defination and statement
function squareOne(num) {
  return num * num;
}
// which has no name, then we call it anonymas
// What is function expression
const squareTwo = function (num) {
  return num * num;
};

// What are first class functions
// first class functions are those function which are act like a variable . The variable is onverted into a particular function.

function squareThree(num) {
  return num * num;
}

function displaySquare(fn) {
  console.log("Square is " + fn(5));
}
displaySquare(squareThree);

// Functions in Js
// What is IIFE

(function squareFour(num) {
  console.log(num * num);
})(5);

// Q5  - IIFE  - o/p based questions?
(function (x) {
  //  first search x into the inner scope, if doesn't found, then it search it to the outer scope
  // This is going to happed because of closure
  // A closure gives you access to an outer function’s scope from an inner function
  return (function (y) {
    console.log(x);
  })(2);
})(1);

// Question 4 : Function Scope

// Q-1
var num1 = 20,
  num2 = 3,
  name = "Nur Adnan";

function mul() {
  return num1 * num2;
}
console.log(mul());

function getScore() {
  var num1 = 3,
    num2 = 4;
  function add() {
    return name + " scored " + (num1 + num2);
  }
  return add();
}

console.log(getScore());

// Q-2
// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }
// 0, 1, 2, 3, 4

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// 5, 5, 5, 5, 5

// Question 5 : Function Hoisting

// Without Hoisting:
function functionName() {
  console.log("Work at tech");
}
functionName();

// Output based question
var x = 21;
var fun = function () {
  // init
  // execute
  console.log(x);
  var x = 20;
};
// ans: undefined
fun();

// Question 6 :  Params vs arguments

function squareFive(num) {
  // params
  return num * num;
}
squareFive(5); //arguments

// spread vs rest operators

function multiply(num1, num2) {
  console.log(num1 * num2);
}

var arrMulOne = [5, 2];
multiply(...arrMulOne); // spread operator

function multi(...nums) {
  // in params its called rest operator
  console.log(nums);
}

var arrMulTwo = [7, 2];
multi(...arrMulTwo);

// if want to use rest or spread operator, then use it at the last
const fn = (a, x, y, ...numbers) => {
  console.log(x, y, numbers);
};
fn(5, 6, 3, 7, 8, 9);
