// creating object literals

let student = {
  name: "bibek",
  age: 21,
  marks: 95,
  collage: "srmu"
};
console.log(student);

const boys = {
  name: "ganesh",
  class: 12,
  subject: "grammer"
};
console.log(boys);

// we can store array in object literals.
const item = {
  price: 199,
  discount: 50,
  colors: ["red", "yellow", "pink"]
};
console.log(item);

// thread / twitter post
const post = {
  username: "@ganeshverma123",
  content: "this is my #first code for object literals",
  likes: 834,
  reposts: 16,
  tags: ["@ramesh", "@chodu", "@laudolalit"]
};
console.log(post);

// getting values
console.log(post["username"]); // in case of variables
console.log(post.likes);
console.log(post.tags[0]);

const obj = {
  1: "a",
  2: "b",
  true: "c",
  null: "d",
  undefined: "e"
};

// add/update values
const stud ={
  name: "ganesh",
  age: 21,
  marks: 93,
  city: "delhi"
}
console.log(stud);
stud.city = "mumbai";
stud.gender = "male";
stud.marks = "A";
delete stud.age; // we can delete also.
console.log(stud);


// objects of objects
const classInfo = {
  aman: {
    grade: "A+",
    city: "Delhi"
  },
  bibek: {
    grade: "A",
    city: "Nepalgunj"
  },
  cuti: {
    grade: "B+",
    city: "Nepalgunj"
  }
};

console.log(classInfo);
console.log(classInfo.bibek);
console.log(classInfo.bibek.city);

//Array of Objects
const classboys = [
  {
    name: "laudu",
    grade: "E+",
    city: "andpur"
  },
  {
    name: "Muthmare",
    grade: "C",
    city: "jhatpur",
  },
  {
    name: "galich",
    grade: "L",
    city: "chumanpurwa"
  }
];
console.log(classboys);

// math object
let step1 = Math.random();
let step2 = step1 * 10;
let step3 = Math.floor(step2);
let step4 = step3 + 1;

let step5 = Math.floor(Math.random() * 10 + 1);
console.log(step5);

// practice question
// Generate a random number between 1 and 100.
let random = Math.floor(Math.random() * 100 + 1);
console.log(random);

// Generate a random number between 1 and 5.
let random2 = Math.floor(Math.random() * 5 + 1);
console.log(random2);

// Generate a random number between 21 and 25.
let random3 = Math.floor(Math.random() * 5 + 21);
console.log(random3);


// Guessing game.. user enter a max number and then tries to guess a random generated number between 1 to max.
// const max = prompt("enter the max number");

// const random4 = Math.floor(Math.random() * max) + 1;
// console.log(random4);

// let guess = prompt("guess the number");
// while(true){
//   if(guess == "quit"){
//     console.log("user quit");
//     break;
//   }
//   if(guess == random4){
//     console.log("you are right! congrats!! ramdom number was", random4)
//     break;
//   } else if(guess < random4){
//     guess = prompt("hint: your guess was too small. please try again");
//   }else {
//     guess = prompt("hint: your guess was too large. please try again");
//   }   
// }

// JS(Part5) PracticeQuestions
// Qs1. Create a program that generates a random number representing a dice roll. [The number should bebetween 1 and 6].
let dice = Math.floor(Math.random() * 6 + 1);
console.log(dice);

// Qs2.Create an object representing a car that stores the following properties for the car :name,model,color. Print the car’s name.
const car = {
  name: "BMW",
  model: "M4",
  color: "blue"
};
console.log(car);
console.log(car.name);

// Qs3.Create an object Person with their name,age and city.Edit their city’s original value to change it to “NewYork”.Add a new property country and set it to the United States.
const person = {
  name: "bibek",
  age: 15,
  city: "lucknow",
};
console.log(person);
person.city = "New York";
person.country = "United Stste";
console.log(person);