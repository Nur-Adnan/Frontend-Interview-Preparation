// var vs let vs const
// scope

// without any block every thing is a global scope
// var a = 5;

/* 
    var is function-scoped, meaning:

    - If declared inside a function, it is confined to that function.
    - If declared outside any function (in the global context), it becomes global-scoped.
*/

// within block everything is a block scope
{
  // block scope
}
// within the functon every thing is a functional scope

/*
    Feature	        var	                                    let	                                const
    Scope	        Function-scoped	                        Block-scoped	                    Block-scoped
    Hoisting	    Yes (initialized to undefined)	        Yes (temporal dead zone)	        Yes (temporal dead zone)
    Redeclaration	Allowed	                                Not allowed	                        Not allowed
    Reassignment	Allowed	                                Allowed	                            Not allowed

*/

//  Variable Shadowing
function test() {
  var aTest = "Hello";
  //   let b = "Bye";
  if (true) {
    let aTest = "Hi";
    // var b = "Goodbye";
    console.log(aTest);
  }
  console.log(aTest);
}
test();

// var variable by using let, but not let variable by using var

// Redeclaration
/*  
    var can do Redeclaration
    var a;
    var a;
*/

/*  
    let can't do Redeclaration
    let a;
    let a;
*/
/*  
    const can't do Redeclaration
    const a;
    const a;
*/

// Declaration without initialisation

/* 
    var a;
    let b;
*/

// Can't Declaration without initialisation
// const c;

// Re-initialisation
// Var can do
// var a = 5;
// a = 6;

// let can do
let a = 5;
a = 6;

// const can't

// const b = 5;
// b = 6;

// JavaScript execution context have two phases
/*
    1. creation phase
    first, create global or a window object
    second, setup a memory heap, to store variable, and function references 
    third, var and all the Declaration as an undefined
*/

/* 
    2. execution phase
*/

// Hoisting
var count;
console.log(count);
count = 1;

function abc1() {
  console.log(a);
  var a = 10;
}
abc1();
// ans: Undefined

function abc2() {
  console.log(a, b, c);

  const c = 30;
  let b = 20;
  var a = 10;
}
abc2();

//  b and c hoisted, but in a the
// The temporal dead zone (TDZ) in JavaScript is the period when a variable is declared but not yet initialized.
