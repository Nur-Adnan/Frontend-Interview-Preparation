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
