// functions in js 

function hello() {
  console.log("how are you!");
}

function yourName() {
  console.log("my name is chutiya");
  console.log("i study in chutiya collage SRMU");
}

// calling the function.
hello();
yourName();

function print1to5() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

print1to5();

function isAdult() {
  let age = 18;
  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }
}

isAdult();

// example practice qs 1
function song() {
  console.log("bhiya me kas ke saiya...");
  console.log("mare la kacha kach..");
}

song();

// example practice qs 2
// create a functio to roll a dice and always display the value of the dice (1 to 6)
function roll() {
  const random = Math.floor(Math.random() * 6) + 1;
  console.log(random);
};

roll();
roll();
roll();
roll();

// function with arguments
function printName(name) {
  console.log(name);
}
printName("bibek");
printName("ramesh");
printName("shilpa");
printName("rahul");

//
function printInfo(name, age) {
  console.log(`${name}'s age is ${age}.`);
}

printInfo("Ganesh", 23);
printInfo("muthmare", 14);
printInfo("bauna"); // undefined for age. 

// example practice qs 3
// create a function that gives us the average of 3 numbers.
function calcuAvg(a, b, c) {
  let avg = (a + b + c) / 3;
  console.log(avg);
}

calcuAvg(3, 8, 4);

// example practice qs 4
// create a function that prints the multiplication table of a number.
function printTable(n) {
  for (let i = n; i <= n * 10; i += n) {
    console.log(i);
  }
}
printTable(13);


// return
function sum(a, b) {
  return a + b;
}
sum(3, 5); // this will not give the value.

// let s = sum(3, 5);
// console.log(s);        // we use this to get the out from it..

function sub(a, b) {
  console.log("what");
  console.log("what");
  return a - b;
  console.log("wher");
  console.log("wher");
}
console.log(sub(8, 4));

// another example
function isAdult(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "not Adult";
  }
  console.log("how are you");
}

// example practice qs 5
// create a function that returns the sum of numbers from 1 to n.
function number(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i; // sum += i;
  }
  return sum;
};

// example practice qs 6
// create a function that returns the concatenation of all strings in an array..
let str = ["hamka", "lagathai", "wo", "dai", "!"];
function concat(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    result += str[i];
  }
  return result;
}


// scope 
let total = 54; // global scope

function calSum(a, b) {
  let total = a + b;  // function scope
  console.log(total);
}
calSum(2, 3);

// block scope
// {
//    let d = 20; // can access if we use var keyword
// }
// console.log(d);

// lexical scope
function outerFunc() {
  let x = 5;
  let y = 6;
  function innerFunc() {
    console.log(x);
    console.log(y);
  }
  innerFunc();
}

// example practice qs 7.  finding the output of this code.
let greet = "hello";  // global scope
function changeGreet() {
  let greet = "namaste"; // function scope
  console.log(greet);
  function innerGreet() {
    console.log(greet); // lexical scope
  }
}

console.log(greet);
changeGreet();

// function expressions     (name less functon)
let calculate = function (a, b) {
  return a + b;
}

// higher order function
function multipleGreet(func, n) {
  for (let i = 1; i <= n; i++) {
    func();
  }
}

let greet1 = function () {
  console.log("hello");
}

multipleGreet(greet1, 16);

// higher order function (return)
let odd = function (n) {
  console.log(!(n % 2 == 0));
}

let even = function (n) {
  console.log(n % 2 == 0);
}



function oddOrEvenFactory(request) {
  if (request == "odd") {
    let odd = function (n) {
      console.log(!(n % 2 == 0));
    }
    return odd;
  } else if (request == "even") {
    let even = function (n) {
      console.log(n % 2 == 0);
    }
    return even;
  } else {
    console.log("wrong request");
  }
}

let request = "odd";



















