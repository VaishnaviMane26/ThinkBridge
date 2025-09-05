In this session, I practiced the core JavaScript concepts of functions, block scope, and working with objects.
I wrote code examples inside src/js/functions.js and src/js/objects.js.

# Session 3 – Functions, Scope & Objects

## Overview
In this session, I practiced **JavaScript functions** and **objects**.  
I worked on different types of function declarations, understanding **block scope**,  
and explored how to create and iterate over objects in JavaScript.


## Functions
JavaScript provides multiple ways to declare functions:

1. Function Declaration
   function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Vaishnavi"));


2. function Expression
  const add = function (a, b) {
  return a + b;
};
console.log(add(5, 3)); //15

3. Arrow Function
  const multiply = (a, b) => a * b;
console.log(multiply(4, 6)); // 24

4. Block Scope Example
let globalVar = "I am global";
{
  let blockVar = "I am block-scoped";
  console.log(globalVar); 
  console.log(blockVar);  
}
console.log(globalVar); 


## Objects
Created an object student with properties like name, age, course, and skills.
Also learned different ways to access and iterate over object properties.


const student = {
  name: "Vaishnavi",
  age: 22,
  course: "Web Development",
  skills: ["HTML", "CSS", "JavaScript"],
};
 
 objects stores the value in key and value pair.




