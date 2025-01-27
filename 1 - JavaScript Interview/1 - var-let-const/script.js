// var vs let vs const
// scope

// without any block every thing is a global scope
var a = 5;
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
  var a = "Hello";
  //   let b = "Bye";
  if (true) {
    let a = "Hi";
    // var b = "Goodbye";
    console.log(a);
  }
  console.log(a);
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

var a;
let b;
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
