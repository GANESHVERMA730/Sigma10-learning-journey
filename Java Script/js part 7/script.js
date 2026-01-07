// js part 7

// This keyword.
const student = {
  name: "Bibek",
  age: 23,
  eng: 58,
  math: 94,
  phy: 47,
  getAvg() {
    let avg = (this.eng + this.math + this.phy) / 3;
    console.log(`${this.name} got avg marks = ${avg}`);
  }
}

// try and catch 
console.log("hello");
console.log("how are you");
// let a = 5;
try {
  console.log(a);
} catch (err) {
  console.log("catch an error.. a is not defined.");
  // console.log(err);
}
console.log("hello3");
console.log("hello3");
console.log("hello3");


// Miscellaneous Topics..

// Arrow Functions.
const sum = (a, b) => {
  console.log(a + b);
};

const cube = (n) => {  // parenthis can be optional in case of single arguments. (but not working!!)
  return n * n * n;
};

const pow = (a, b) => {
  return a ** b;
};

const hello = () => {
  console.log("how are you!!");
};

// implicite return
const mul = (a, b) => a * b;

// set timeout 
console.log("hello Everyone!!");

setTimeout(() => {
  console.log("this is my first timeout code..");
}, 4000);

console.log("welcome to my code");

// setInterval
// setInterval(() => {
//   console.log("hello duniya");
// }, 2000);

let id = setInterval(() => {
  console.log("hello duniya");
}, 2000);
console.log(id)
clearInterval(id)  //used to stop 

// this with arrow function
const students = {
  name: "Bibek",
  marks: 95,
  prop: this, //global scope
  getName: function(){
    console.log(this);
    return this.name;
  },
  getMarks: () =>{
    console.log(this); //parent's scope
    return this.marks;
    },
};

// practice questions 
const square = (n) => {
  return n*n;
};

let id1 = setInterval(()=>{
  console.log("aur batao sab thik??");
}, 2000);

setTimeout(()=>{
  clearInterval(id1);
  console.log("clear interval run");
}, 10000);

// JS(Part7) PracticeQuestions
// Qs1. Write an arrow function named array Average that accepts an array of numbers and returns the average of those numbers.

let arr = [1, 2, 3, 4, 5, 6];
const arrayAverage = (arr) => {
  let total = 0;
  for (let number of arr){
    total += number;
  }
  return total/arr.length;
};
console.log(arrayAverage(arr));

// Qs2.Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.
let num = 4;
const isEven = (num) => num % 2 == 0;
console.log(isEven(num));


// Qs3. What is the output of the following code:
const object = {
  message: 'Hello Duniya',
  logMessage(){
    console.log(this.message);
  }
};
setTimeout(object.logMessage, 1000);

// Qs4. What is the output of the following code:
let length = 4;
function callback (){
  console.log(this.length);
}
const object1 = {
  length: 5,
  method(callback){
    callback();
  },
};

object1.method(callback, 1, 2);






