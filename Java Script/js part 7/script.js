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