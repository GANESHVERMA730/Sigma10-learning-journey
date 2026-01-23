console.log('Hello World');
let pencilPrice = 10;
let erasorPrice = 5;
// let output = "The total price is : " + (pencilPrice + erasorPrice) + "Rupees";
let output = `The total price is : ${pencilPrice + erasorPrice} Rupees`;
console.log(output);

// Arithmetic Operators
let a = 10;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

console.log(a++);
console.log(++a);

let age = 18;
console.log(age > 18);
console.log(age < 18);
console.log(age <= 18);
console.log(age >= 18);
console.log(0 < -1);
console.log(5 == 5);
console.log(3 != 3);

console.log('*' < '&');

let age2 = 18;
if (age >= 18) {
  console.log("can vote: ")
}


// let color = "red";

// //Trraffic Light system
// if (color === "red"){
//   console.log("stop");
// }
// if (color === "yello"){
//   console.log("slow down");
// }
// if (color === "yellow"){
//   console.log("go");
// }


// if else statement 
let age3 = 14;
if (age3 >= 18) {
  console.log("you cannot vote");
}
else if (age3 == 18) {
  console.log("you can vote")
}
else if (age3 == 14) {
  console.log("you can not drive ")
}

// marks system 
let marks = 70;

if (marks >= 80) {
  console.log("A+");
} else if (marks >= 60) {
  console.log("A");
} else if (marks >= 33) {
  console.log("B");
} else if (marks >= 33) {
  console.log("F");
}

// practice
let color = "white";

if (color === "red") {
  console.log("stop");
} else if (color === "yellow") {
  console.log("slow down");
} else if (color === "gren") {
  console.log("go");
} else {
  console.log("Traffic light is broken: ")
}

// practice question
let size = "xxl";

if (size == "xl") {
  console.log("Price is Rs. 250");
} else if (size == "l") {
  console.log("Price is Rs. 200");
} else if (size == "m") {
  console.log("Price is Rs. 100");
} else {
  console.log("Price is Rs. 50")
}

// using nested if else
let marks1 = 33;

if (marks1 >= 33) {
  console.log("pass");
  if (marks1 >= 80) {
    console.log("A")
  } else {
    console.log("P")
  }
} else {
  console.log("better lick next time: ")
}

// logical operator &&
let marks2 = 80;
if (marks2 >= 33 && marks2 >= 80) {
  console.log("pass");
  console.log("Grade : A");
}

// logical operator ||
let marks3 = 80;
if (marks3 >= 33 || marks3 >= 80) {
  console.log("pass");
  console.log("Grade : A");
}

// logical operator !
let marks4 = 80;
if (!(marks4 < 33)) {
  console.log("pass");
  console.log("Grade : A");
}

let marks5 = 23;
if ((marks5 > 33 && marks5 <= 80) || !false) { // left to right calculation
  console.log("Pass")
}

// practice question 
let string = "apple";
if (string[0] === "a" && string.length > 3) {
  console.log("It is a good string: ");
} else {
  console.log("It is not a good string: ")
}


// nice practice question
let num = 12;
if ((num % 3 === 0) && ((num + 1 == 15) || (num - 1 == 11))) {
  console.log("safe");
} else {
  console.log("unsafe");
}

// truthy and falsy 
let string1 = "a";
if (string1) {
  console.log("string is not empty: ")
} else {
  console.log("string is empty");
}

// switch statement 
let color1 = "red";

switch (color1) {
  case "red":
    console.log("stop");
    break;
  case "yellow":
    console.log("slow down");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Light is broken..");
}

// switch statement practice question 
let day = 5;

switch (day) {
  case 1:
    console.log("sunday");
    break;
  case 2:
    console.log("monday");
    break;
  case 3:
    console.log("tuesday");
    break;
  case 4:
    console.log("wednesday");
    break;
  case 5:
    console.log("thrusday");
    break;
  case 6:
    console.log("friday");
    break;
  case 7:
    console.log("saturday");
    break;
  default:
    console.log("wrong")
}

// alerts and prompt

// alert("something is wrong");
// prompt("pleasse enter your code");

// let firstname = prompt("enter your name");
// console.log(firstname);

console.log("hello")
console.error("this is an error msg");
console.warn("this is an warning msg");


// ASSIGNMENT QUESTIONS SOLUTION

// Qs1.Createanumbervariablenumwithsomevalue.Now,print“good”ifthenumberisdivisibleby10andprint“bad”ifitisnot
let num1 = 50;
if (num % 10 == 0){
  console.log("good");
}else{
  console.log("bad")
}

// qs2. Taketheuser'sname&ageasinputusingprompts.Thenreturnbackthefollowingstatementtotheuserasanalert(bysubstitutingtheirname&age)

// let name = prompt("Enter your name: ");
// let age1 = prompt("Enter your age: ");
// alert(`${name} is ${age} years old.`)


// Qs3.Writeaswitchstatementtoprintthemonthsinaquarter.
let Quarter = 3;

switch(Quarter){
  case 1:
    console.log("january, Februry, March");
    break;
  case 2:
    console.log("April, May, June");
    break;
  case 3:
    console.log("July, Aug, September");
    break;
  case 4:
    console.log("October, November, December");
    break;
    default:
      console.log("Quarter not found")
}

// Qs4.Astringisagoldenstringifitstartswiththecharacter‘A’or‘a’andhasatotallengthgreaterthan5
let string3 = "apple";

if ((string3[0] === "A" || "a") && string3.length > 5){
  console.log("It is a Golden string: ")
}else{
  console.log("It is not a Golden string: ")
}

// Qs5.Writeaprogramtofindthelargestof3numbers.bibekverma21@gmail.com
let c = 10;
let d = 15;
let e= 20;

if (c > d){
  if (a > e){
    console.log(c, "is largest");
  }else{
    console.log(e, "is largest");
  }
}else{
  if (d > e){
    console.log(d, "is largest");
  }else{
    console.log(e, "is largest");
  }
}


// Qs6(Bonus).Writeaprogramtocheckif2numbershavethesamelastdigit.Eg:32and47852havethesamelastdigiti.e.2
let num2 = 32;
let num3 = 47852;

if ((num2%10) == (num3 % 10)){
  console.log("number have the same last digit which is:",num2%10)
}else {
  console.log("numbers don't have the same last digit");
}
























