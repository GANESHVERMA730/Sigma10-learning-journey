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
let array = [1,4,5,3,7,9,0];
console.log(Math.min(...array));
console.log(...array);

let myName = "bibek Kumar Verma";
console.log(...myName);


// with Array Literals
let arr0 = [1,2,3,4,5];
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

const dataCopy = {...data, id: 130};
console.log(data);
console.log(dataCopy);
console.log(data);





























