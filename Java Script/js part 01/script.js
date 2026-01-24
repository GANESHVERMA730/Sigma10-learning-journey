// INTRODUCTION TO JAVASCRIPT
console.log("JavaScript Concepts Demo File");

// USING CONSOLE
console.log("This is console output");
console.log("Sum:", 5 + 10);

// VARIABLES
let userName = "Ganesh";
var userAge = 21;
const countryName = "India";

console.log(userName, userAge, countryName);

// DATA TYPES
let scoreValue = 95;              // Number
let courseName = "BCA";           // String
let isStudent = true;             // Boolean
let emptyValue = null;            // Null
let notAssigned;                  // Undefined

console.log(typeof scoreValue);
console.log(typeof courseName);
console.log(typeof isStudent);
console.log(typeof emptyValue);   // object (JS bug)
console.log(typeof notAssigned);

// NUMBERS IN JS
let wholeNumber = 50;
let decimalNumber = 12.75;

console.log(wholeNumber + decimalNumber);

// OPERATIONS IN JS
let numOne = 20;
let numTwo = 6;

console.log(numOne + numTwo); // addition
console.log(numOne - numTwo); // subtraction
console.log(numOne * numTwo); // multiplication
console.log(numOne / numTwo); // division
console.log(numOne % numTwo); // modulus

// NaN IN JS
let invalidCalculation = "hello" * 2;
console.log(invalidCalculation);        // NaN
console.log(typeof invalidCalculation); // number

// OPERATOR PRECEDENCE
let precedenceResult1 = 10 + 4 * 2;
let precedenceResult2 = (10 + 4) * 2;

console.log(precedenceResult1); // 18
console.log(precedenceResult2); // 28

// LET, VAR & CONST
var oldVariable = "var variable";

let changeableValue = 100;
changeableValue = 200;

const fixedValue = 3.14;

console.log(oldVariable);
console.log(changeableValue);
console.log(fixedValue);

// ASSIGNMENT OPERATORS
let assignNum = 10;

assignNum += 5;
assignNum -= 2;
assignNum *= 3;
assignNum /= 2;

console.log(assignNum);

// UNARY OPERATORS
let counterValue = 5;

counterValue++;
counterValue--;

console.log(counterValue);

// IDENTIFIER RULES
let validName = "OK";
let _privateValue = 10;
let $priceTag = 99;

// let 1wrong = 10; ❌ invalid
// let user-name = "abc"; ❌ invalid

console.log(validName, _privateValue, $priceTag);

// BOOLEAN IN JS
let isLoggedInUser = true;
let hasPermission = false;

console.log(isLoggedInUser);
console.log(hasPermission);

if (isLoggedInUser) {
  console.log("User is logged in");
}

// TYPESCRIPT (CONCEPT ONLY)
// TypeScript example (not runnable in JS file)
// let ageValue: number = 21;
// let personName: string = "Ganesh";

// STRING IN JS
let greetingMessage = "Hello JavaScript";
let cityName = "Lucknow";

console.log(greetingMessage);
console.log(cityName);

// STRING INDICES
let languageName = "JavaScript";

console.log(languageName[0]); // J
console.log(languageName[4]); // S
console.log(languageName[9]); // p

// NULL & UNDEFINED
let nullData = null;
let undefinedData;

console.log(nullData);       // null
console.log(undefinedData);  // undefined
