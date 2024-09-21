console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 == 3);   // false
console.log(5 != 3);   // true
console.log(5 >= 3);   // true

console.log(null > 1);     // false
console.log(null < 1);     // true
console.log(null == 1);    // false
console.log(null >= 1);    // false

console.log(undefined == 1); // false
console.log(undefined > 1);  // false
console.log(undefined < 1);  // false
console.log(undefined >= 1); // false

console.log("10" === 10);  // false
console.log("true" == true); // false
console.log(false == 0);   // true

// Examples with NaN (Not a Number)
console.log(NaN > 1);  // false
console.log(NaN < 1);  // false
console.log(NaN == 1); // false
console.log(NaN != 1); // true

// Strict vs loose equality
console.log("false" === false); // false
console.log(0 === false); // false
console.log(0 == false);  // true
