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
