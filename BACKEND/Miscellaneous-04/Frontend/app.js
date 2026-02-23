let arr = [1, 2, 3];
arr.sayHello = () => {
  console.log("hello!, I am arr");
};

// factory function
function personMaker(name, age) {
  const person = {
    name: name,
    age: age,
    talk() {
      console.log(`Hi, my name is ${this.name}`);
    },
  };
  return person
}

let p1 = personMaker("admin", 22);
let p2 = personMaker("yogi", 32);

//  Constructors - doesn't return anything and start with Capital
function Person(name, age) {
  this.name = name;
  this.age = age;
  // console.log(this);
}

Person.prototype.talk = function () {
  console.log(`Hi, my name is ${this.name}`)
};

let p3 = new Person("rahul", 26);
let p4 = new Person("chutiya", 27);

// Classes
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`hi, My name is ${this.name}`);
  }
}

let p5 = new Person2("rakesh", 32);
let p6 = new Person2("kishor", 22);

// Inheritence 
// class Student{
//   constructor(name, age, marks){
//     this.name = name;
//     this.age = age;
//     this. marks = marks;
//   }
//   talk(){
//     console.log(`Hi, i am ${this.name}`);
//   }
// }

// class Teacher{
//   constructor(name, age, subject){
//     this.name = name;
//     this.age = age;
//     this. subject = subject;
//   }
//   talk(){
//     console.log(`Hi, i am ${this.name}`);
//   }
// }

class Person3 {
  constructor(name, age) {
    console.log("person3 class constructor");
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hi, i am ${this.name}`);
  }
}

class Student extends Person3 {
  constructor(name, age, marks) {
    console.log("student class constructor");
    super(name, age); //parent class constructor is being called
    this.marks = marks;
  }
}

class Teacher extends Person3 {
  constructor(name, age, subject) {
    super(name, age); //parent class constructor is being called
    this.subject = subject;
  }
}

////////////
class Mammal { //base class/ parent class
  constructor(name) {
    this.name = name;
    this.type = "warm-blooded";
  }
  eat() {
    console.log("I am eating");
  }
}

class Dog extends Mammal { //child class
  constructor(name) {
    super(name);
  }

  bark() {
    console.log("woff...");
  }
}

class Cat extends Mammal { // child class
  constructor(name) {
    super(name);
  }

  bark() {
    console.log("me kya ladle MEOW. ghop.. ghop.. ghop..");
  }
}


// practice code to understand the concepts: 
class Box {
  constructor(name, l, b) {
    this.name = name;
    this.l = l;
    this.b = b;
  }

  area() {
    let area = this.l * this.b;
    console.log(`Box area is ${area}`);
  }
}

class Square extends Box {
  constructor(a) {
    super("Square", a, a); // call parent constructor
  }

  area() {
    let area = this.l * this.b;
    console.log(`Square area is ${area}`);
  }
}

let sq1 = new Square(4);
sq1.area();