// Javascript is a High-level, Object-oriented, Multi-paradigm, Synchronous, Single-threaded Programming Language
// High-level :- we don't to worry about complex stuff like memory management
// Object-oriented :- Based on objects, for storing most kinds of data
// Multi-paradigm : - we can use different style of programming
// JavaScript is considered a multi-paradigm language because it supports both object-oriented and functional programming paradigms.
// Synchronous:- One command at a time.
// Single-threaded:- In a specific synchronous order.

// programming :- instruct computer to do things

// ===============

// values and variables

// Values are the data you use in your program.
// Variables are like containers that store values.
// You can change the values stored in variables anytime in your program.

// ===================

// data types

// "undefined" is a special value that represents the absence of a value or a declared variable that has not been assigned a value.

// "undefined" is used to indicate that a variable has not been assigned a value,
//  while
//  "null" is used to indicate that a value has been intentionally set to a non-existent value.

// ================

// comments
// ==================

// typeof()
// indicating what the type of a variable or expression.
// used to check the type of a value before performing operations on it,

// ================================

// Variables are declared using the "var", "let", or "const" keyword

// The "var" keyword is used to declare a global or function-scoped variable, which can be re-declared and re-assigned within its scope.

// The "let" keyword is used to declare a block-scoped variable, which can be re-assigned within its block but cannot be re-declared within the same block.

// The "const" keyword is used to declare a constant variable, which cannot be re-assigned or re-declared within its scope.

// let :- in future it will be change then use it
// eg :- age
// const  :- in future it will not be change then use it
// eg :- birthYear

// always use const
// really sure the variable needs to change then use let
// never use var

// ==============================================

// basic operator
// performing operations on values,

// Arithmetic operators: + (addition), - (subtraction), * (multiplication), / (division), % (modulus), ++ (increment), and -- (decrement).

// Use pre-increment when the incremented value needs to be used immediately in the expression.
// Example:
//
// var x = 10;
// console.log(++x + 5); // Output: 16

// Use post-increment when the original value of the variable needs to be used in the expression, but the incremented value should be used in the next expression.
// Example:

// var y = 10;
// console.log(y++); // Output: 10
// console.log(y); // Output: 11

// Comparison operators: == (equal to), != (not equal to), > (greater than), < (less than), >= (greater than or equal to), and <= (less than or equal to).

// Logical operators: && (and), || (or), and ! (not).

// Assignment operators: = (assignment), += (add and assign), -= (subtract and assign), *= (multiply and assign), /= (divide and assign), %= (modulus and assign), and others.

// Ternary operator: ? : (conditional operator).

// Here is a list of the operators in order of precedence in JavaScript, from highest to lowest:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// =============================================================
// strings, and template literals

// JavaScript provides multiple ways to create strings, and template literals offer a convenient way to build strings with dynamic values and support for multiline strings.

// string join with concatenation ""+""
// string join with template literals  `....${}...`
// var name = "John";
// var message = `Hello ${name}`;
// console.log(message); // Output: Hello John

// =========================================================================================================

// 18. Taking Decisions: if / else Statements

// conditional statements, such as if-else, switch, or ternary operator.

// If: A simple if statement checks a condition and runs the code inside the block if the condition is true.

// If-Else: An if-else statement is a combination of two conditions, if the first condition is false, the second condition will run.

// If-Else-If: An if-else-if statement checks multiple conditions, one after the other, until a condition is true.

// if-else-if statements in JavaScript is to use the switch statement. 

// Switch: A switch statement allows you to check multiple cases and execute the code that corresponds to the first matching case.

// Ternary Operator: The ternary operator is a shorthand for an if-else statement. It takes a condition and returns one value if the condition is true, and another value if the condition is false.
// 
// If:
// Checking if a user is logged in before showing sensitive information
// Checking if a form is filled out correctly before submitting
// If-Else:
// Displaying a message depending on a user's age
// Displaying an error message if the user input is incorrect
// If-Else-If:
// Checking multiple conditions in a form and displaying different messages depending on the conditions
// Selecting a discount rate based on a customer's purchase history
// Switch:
// Checking multiple values and executing code based on the first matching value
// Determining the days in a month based on a given number
// Ternary Operator:
// Conditionally setting a value based on a condition
// Assigning a value to a variable based on a user's input

// ============================================================================================================

// 20. Type Conversion and Coercion
// changing the type of a value from one type to another
// Type Conversion is an explicit process
// parseInt() - Converts a string to an integer.
// parseFloat() - Converts a string to a floating-point number.
// Number() - Converts a value to a number.
// String() - Converts a value to a string.
// Boolean() - Converts a value to a boolean.
// Type Coercion is an implicit process
// Coercion in JavaScript automatically converts a value to a different type based
// var x = "123" + 4;
// console.log(x); // "1234"
// console.log(typeof x); // Output: string

// In this example, the value "123" is automatically converted to a number in the expression, but the result is a string because one of the values is a string.

"10" - "4" - "3" - 2 + "5"; // 15

// ============================================================================================================

// 21. Truthy and Falsy Values

// A truthy value considered true in a boolean context
//  a falsy value considered false in a boolean context.

// The following values are considered falsy in JavaScript:

// false
// 0 (zero)
// "" (empty string)
// null
// undefined
// NaN (Not-a-Number)

// For example,
// 1
// the values "0" (string with a single character 0),
//  [], {} (empty arrays and objects),
//   and "false" (string with the text "false")
//   are all considered truthy.

// use-case
// variable is actually defined or not

// ============================================================================================================

// 22. Equality Operators: == vs. ===
// There are two types of equality operators: strict equality (===) and loose equality (==).

// strict equality (===):-
// only if the values are equal and of the same type.
// var x = 10;
// var y = 10;
// if (x === y) {
// console.log("x and y are equal and of the same type");
// }

// loose equality (==):-
//  compare values of different types, such as strings and numbers, and have JavaScript automatically perform type coercion if necessary.
// var x = "10";
// var y = 10;
// if (x == y) {
// console.log("x and y are equal, despite their different types");
// }
// ============================================================================================================

// 23. Boolean Logic

// Boolean logic operators are used to compare values and return a boolean value based on the comparison. 

// && (And operator): Returns true if both operands are true

// || (Or operator): Returns false if both operands are false

// ! (Not operator): Return opposite Boolean value 

// == (Equality operator): Returns true if both operands are equal

// === (Strict equality operator): Returns true if both operands are equal and of the same type


// ============================================================================================================

// 24. Logical Operators

// =========================================================================================================

// 26. The switch Statement
// if-else-if statements in JavaScript is to use the switch statement. 
// test a value against multiple cases.

// var color = "red";

// switch (color) {
//     case "red":
//         console.log("The color is red");
//         break;
//     case "blue":
//         console.log("The color is blue");
//         break;
//     case "green":
//         console.log("The color is green");
//         break;
//     default:
//         console.log("The color is not red, blue, or green");
//         break;
// }

// ===========================================================================================================

// 27. Statements and Expressions

//  an assignment statement assigns a value to a variable:
// let x = 5;

// an arithmetic expression evaluates to a value:
// 5 + 3;  // evaluates to 8

// ============================================================================================================

// 28. The Conditional (Ternary) Operator

// JavaScript is a shorthand way of writing an if-else statement.

// condition ? valueIfTrue : valueIfFalse;

// let x = 5;
// let y = (x > 10) ? "x is greater than 10" : "x is not greater than 10";
// console.log(y);  // "x is not greater than 10"

// ============================================================================================================
// 30. JavaScript Releases: ES5, ES6+ and ESNext

// 32. Activating Strict Mode (es5)
// Strict mode is a feature in JavaScript that makes the language more strict and secure. It disallows certain syntax and behavior that can lead to bugs and security issues
// eg :- "use strict";

// ============================================================================================================
// 33. Functions
// Functions are reusable blocks of code in JavaScript that can perform tasks, accept parameters, and return values. They help in organizing and structuring code, making it more maintainable and reusable.

// function square(x) {
//   return x * x;
// }

// let result = square(5);
// console.log(result);  // 25


// The return keyword is used in JavaScript functions to return a value to the calling code. It allows a function to return a result to the calling code, which can then be stored in a variable or used for further processing."output a value from the function and terminate execution"

// =============================================================================================================

// 34. Function Declarations vs. Expressions

// Function declarations are declared using the function keyword followed by the function name and the list of parameters. 
function square(x) {
  return x * x;
}

// Function expressions are created by assigning a function to a variable. The function can be anonymous, or it can have a name that can be used for recursion.

let square = function(x) {
  return x * x;
};

// function declarations are hoisted and are accessible before their declaration

//  function expressions are not hoisted and can only be accessed after their declaration.

// ============================================================================================================

// 35. Arrow Functions
// They are a shorthand for writing anonymous functions, and have a more concise syntax compared to traditional function expressions

let square = x => x * x;

// console.log(square(2)); // outputs 4


let person = {
  name: 'John Doe',
  hobbies: ['reading', 'hiking', 'traveling'],
  showHobbies: function() {
    console.log(`${this.name} likes:`);
    this.hobbies.forEach(hobby => {
      console.log(` - ${hobby}`);
    });
  }
};

// person.showHobbies();

// Lexical this: Arrow functions inherit the this value of the surrounding code, making them ideal for use in callbacks and event handlers.

// ============================================================================================================



// 36. Functions Calling Other Functions

// Functions can call other functions as part of their execution. This is a common pattern in JavaScript, as it allows for code reuse and modularity.

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

function displayFullName(firstName, lastName) {
  let fullName = getFullName(firstName, lastName);
  console.log(fullName);
}

// displayFullName('John', 'Doe');

//============================================================================================================

// 39. Introduction to Arrays
// ordered collections of values
// homogeneous as well as heterogeneous 

// let hetero = [1, "hello", { name: "John" }];
// let homo = ['apple', 'banana', 'cherry'];

// elements in an array can be accessed by their index, which starts from 0.

// * push() - Adds an element to the end of an array.
// * pop() - Removes and returns the last element of an array.
// * shift() - Removes and returns the first element of an array.
// * unshift() - Adds an element to the beginning of an array.
// * indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// includes() - Returns a boolean indicating whether the specified element is found in the array.
// slice() - Returns a shallow copy of a portion of an array.
// splice() - Adds or removes elements from an array.
// join() - Joins all elements of an array into a string.
// reverse() - Reverses the order of the elements in an array.
// sort() - Sorts the elements of an array in place and returns the sorted array
// map() - Creates a new array with the results of calling a provided function on every element in the original array.
// filter() - Creates a new array with all elements that pass the test implemented by the provided function.
// reduce() - Applies a function against an accumulator and each value of the array (from left to right) to reduce it to a single value.
// forEach() - Calls a provided function once for each element in an array, in order.
// some() - Tests whether at least one element in the array passes the test implemented by the provided function.
// every() - Tests whether all elements in the array pass the test implemented by the provided function.
// find() - Returns the value of the first element in the array that satisfies the provided testing function.
// findIndex() - Returns the index of the first element in the array that satisfies the provided testing function.

// ============================================================================================================

// 42. Introduction to Objects
// collections of key-value pairs that can store data and behavior.
// curly braces {} with key-value pairs inside.
// key = variable name 
// value = any data type

For example:

let person = {
name: "John Doe",
age: 30,
address: {
street: "123 Main St.",
city: "New York"
},
hobbies: ["reading", "swimming", "traveling"]
};

// 43. Dot vs. Bracket Notation
// use dot notation when the property name is a fixed and known value, and 
// use bracket notation when the property name is a dynamic value or expression.

// Object.keys() - returns an array of all the keys in an object
// Object.values() - returns an array of all the values in an object
// Object.entries() - returns an array of all the key-value pairs in an object
// Object.assign() - copies properties from one or more objects and adds them to another object
// Object.getOwnPropertyDescriptor() - returns the property descriptor of an object
// Object.defineProperty() - adds a new property to an object or modifies an existing property
// Object.freeze() - makes an object read-only and prevents further modifications
// JSON.stringify() - converts an object to a JSON string
// JSON.parse() - converts a JSON string to an object.

// ============================================================================================================
// Iteration (loop)


// Breaking and Continuing

// Math.random()


// ============================================================================================================


// 58. How to Think Like a Developer: Become a Problem Solver!

//1.step():- Make sure you 100% understand the problem. Ask the right question to get a clear picture of the problem

// 2.step():- Divide and conquer : Break a big problem into smaller sub-problems.

// 2.1 step():- first try to solve own after some time then move to research

// 3.step():- Don't be afraid to do as much research as you have to (google, stackOverflow, MDN Docs)

// 4.step():- for bigger problems, write pseudo-code before the actual code.