// Primitive (String, Number, Boolean, BigInt, Symbol, Null, Undefined)

const firstName = "sania";  // String
const age = 30;            // Number
const isAdult = true;      // Boolean
const averageScore = 95.8; // Float Number
const totalStudents = 123456789012345678901234n;  // BigInt
const uniqueId = Symbol('456');  // Symbol
const anotherUniqueId = Symbol('456');

console.log(uniqueId === anotherUniqueId); // false

const emptyValue = null;     // Null
let lastName;                // Undefined (declared but not assigned)

// Reference (Array, Object, Function)

const fruits = ["Apple", "Banana", "Orange"];  // Array

const person = {
    name: "sani",
    age: 25,
    occupation: "Engineer"
};  // Object

const greet = function() {
    console.log("Hello, welcome!");
};  // Function

// Comparing reference types
const anotherFruits = ["Apple", "Banana", "Orange"];
console.log(fruits === anotherFruits);  // false (different reference)

greet();  // Function call

// Modifying reference types
fruits.push("Grapes");  // Adding an element to the array
person.age = 26;        // Modifying object property

console.log(fruits);  // ["Apple", "Banana", "Orange", "Grapes"]
console.log(person);  // { name: 'Jane', age: 26, occupation: 'Engineer' }
