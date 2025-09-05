
// --- Creating an Object ---
const student = {
  name: "Vaishnavi",
  emailid: "manevaishnavi1818@gmail.com",
  age: 22,
  course: "Web Development",
  skills: ["HTML", "CSS", "JavaScript"],
};

// --- Accessing properties ---
console.log(student.name);    
console.log(student["course"]); 

// --- Adding new property ---
student.city = "Pune";

// --- Iterating with for...in ---
for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}

// --- Iterating with Object.keys + forEach ---
Object.keys(student).forEach((key) => {
  console.log(`${key}: ${student[key]}`);
});
let globalVar = "I am global";
{
  let blockVar = "I am block-scoped";
  console.log(globalVar); // Accessible
  console.log(blockVar);  // Accessible
}
console.log(globalVar); // Accessible outside block

for (let [key, value] of Object.entries(student)) {
  console.log(`${key}: ${value}`);
}
