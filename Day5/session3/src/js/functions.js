// functions.js

// --- Function Declaration ---
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Vaishnavi")); // Hello, Vaishnavi!

// --- Function Expression ---
const add = function (a, b) {
  return a + b;
};
console.log(add(5, 3)); // 8

// --- Arrow Function ---
const multiply = (a, b) => a * b;
console.log(multiply(4, 6)); // 24

// --- Block Scope Example ---
let globalVar = "I am global";

{
  let blockVar = "I am block-scoped";
  console.log(globalVar); 
  console.log(blockVar);  
}

console.log(globalVar);
