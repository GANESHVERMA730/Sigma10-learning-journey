// foreach

let arr = [1, 2, 3, 4, 5, 6];

arr.forEach(function (el) {
  console.log(el);
});

arr.forEach((el) => {
  console.log(el);
});

// let print = function(el){
//   console.log(el);
// };
// arr.forEach(print);

let arr1 = [{
  name: "rahul",
  marks: 57
},
{
  name: "rajesh",
  marks: 35
},
{
  name: "bibek",
  marks: 85
}];

arr1.forEach((student) => {
  console.log(student.marks);
});

// map 
let num = [1, 2, 3, 4,];
let double = num.map((el) => {
  return el * 2;
});

let students = [{
  name: "rahul",
  marks: 70
},
{
  name: "rajesh",
  marks: 35
},
{
  name: "bibek",
  marks: 85
}];

let gpa = students.map((el) => {
  return el.marks / 10;
});

//Filter
let nums = [0, 1, 2, 3, 5, 8, 12, 9, 13, 10, 7, 6, 4];
let ans = nums.filter((el) => {  // to filter even numbers
  return el % 2 == 0;
});


// Every
let result1 = [2, 4, 6,].every((el) => el % 2 == 0);
console.log(result1);

let result2 = [2, 4, 6, 1].every((el) => el % 2 == 0);
console.log(result2);

let result3 = [2, 4, 6,].every((el) => el % 2 != 0);
console.log(result3);

// some
let result4 = [1, 2, 3, 4].some((el) => (el % 2 == 0));
console.log(result4);

// reduce
let nums1 = [1, 2, 3, 4];
let finalVal = nums1.reduce((res, el) => res + el);
console.log(finalVal);
// at first res will be 0 then it will be 1, then it will be 3, then it will be 6, and finally it will be 10.

// finding maximum value in array
let arr2 = [1, 4, 5, 8, 2, 0, 3, 6];
let output = arr2.reduce((max, el) => {
  if (max < el) {
    return el;
  } else {
    return max;
  }
});
console.log(output);

// practice questuon 
// check if all numbers in our array are multiples of 10 or not.
let numbers = [1, 3, 5, 7, 4, 9, 2, 6, 0];
let multiple = numbers.every((el) => (el % 10 == 0));
console.log(multiple);

// create a functon to find the min number in an array
let minimum = [3, 5, 7, 1, 9, 4, 6];
let number = minimum.reduce((min, el) => {
  if (min < el) {
    return min;
  } else {
    return el;
  }
});
console.log(number);

// default parameters
function sum(a, b = 2) {  // if we assign default value at starting i.e.(a) it won't works in case of giving single value during use. (the given value by the user will be go for a and b remains undefined/NaN.)
  return a + b;
};
console.log(sum(3));
console.log(sum(1, 7));

// spread operator(...)
let array = [1, 4, 5, 3, 7, 9, 0];
console.log(Math.min(...array));
console.log(...array);

let myName = "bibek Kumar Verma";
console.log(...myName);


// with Array Literals
let arr0 = [1, 2, 3, 4, 5];
let newArray = [...arr0];
console.log(newArray);
newArray.push(6);
console.log(newArray);
console.log(arr0);

// with objects literals
const data = {
  email: "bibekverma21@gmail.com",
  password: "abcd320"
};

const dataCopy = { ...data, id: 130 };
console.log(data);
console.log(dataCopy);
console.log(data);

// rest
function sum(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log("you gave us :", args[i]);
  }
}

function sum1(...args) {
  return args.reduce((sum1, el) => sum + el);
}

// destructuring for array
let names = ["bibek", "rahul", "krishna", "kuldeep", "tushar", "raj", "rakesh"];
let [me, bro] = names;
console.log(me, bro);

// destructuring for objects
const student = {
  name: "tushar",
  age: 26,
  class: 13,
  subjects: ["chinrai", "laundanach", "gundai", "chut"],
  username: "laudasur123",
  password: "chut",
};
// let {username, password } = student;
let { username: admi, password: pass, city: pata = "chutpur" } = student;

// Practice Question part 8
// Qs1. Square and sum the array elements using the arrow function and then find the average of the array.

let arrays = [1, 2, 4, 5, 6, 8];

const square = arrays.map((num) => num * num);
console.log(square);

let summ = square.reduce((acc, cur) => acc + cur, 0);

let avg = summ / square.length;
console.log(avg);

// Qs2. Create a new array using the map function whose each element is equal to the original element plus 5.
let newarr = [1, 4, 5, 8, -3, -9];
console.log(newarr.map((newarr) => newarr + 5));

// Qs3.Create a new array whose elements are in uppercase of words present in the original array.
let cases = ["hamka lagat hai wo dai"];
console.log(cases.map((cases) => cases.toUpperCase()));

// Qs4.Write a function called double And ReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.
function doubleAndReturnArgs(arr, ...args){
  let doubledArr = arr.map(num => num * 2);
  let doubledArgs = args.map(num => num * 2);

  return [...doubledArr, ...doubledArgs];
}
console.log(doubleAndReturnArgs([1, 2, 3], 4, 5));

// Qs5. Write a function called merge Objects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
mergeObjects({a: 1, b: 2}, {c: 3, d: 4});














