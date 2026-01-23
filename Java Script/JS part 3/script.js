// string method

// .trim()
// let password = prompt("sent your password");
// let newPass = password.trim();  // creates new string in which the whitespaces is removed.
// console.log(newPass);

// upper and lower case
let str = "Bibek Verma";

console.log(str.toUpperCase());
console.log(str.toLowerCase());

// index of
let msg = "ILovecoding";

console.log(msg.indexOf("Love"));
console.log(msg.indexOf("o"));
console.log(msg.indexOf("love"));


// method chaining. 
let msg1 = "     hello";
// let newMsg1 = msg.trim();
// console.log("after trim : ", newMsg1);
// newMsg1 = newMsg1.toUpperCase();
// console.log("after uppercase : ", newMsg1);
let newMsg = msg1.trim().toUpperCase();
console.log(newMsg);

// slice
let name = "bibekverma";
console.log(name.slice(0, 4));
console.log(name.slice(5));
console.log(name.slice(-1)); // 10-1 => 9

//replace
let str1 = "Ilovedeveloping";
console.log(str1.replace("love", "do"));
console.log(str1.replace("o", "f"));

// Repeat
let code = "developer";
console.log(code.repeat(3));

// Pracrice Questons starts:
let msg2 = "    help!   ";
console.log(msg2.trim().toUpperCase());

let name1 = "ApnaCollege";
console.log(name1.slice(4, 9));
console.log(name1.indexOf("na"));
console.log(name1.replace("Apna","our"));

console.log(name1.slice(4, 11).replace("l", "t"));
// console.log(name1.slice(4, 11).replace("l", "t").replace("l", "t"));  // used to replace the another 'l'
// let newname1 = name1.slice(4, 11).replace("l", "t");
// console.log(newname1.replace("l", "t"));  // used to replace the another 'l'
// practice question ends..

// Array
let sister1 = "rekha";
let sister2 = "anju";
let sister3 = "sanju";

let sisters = ["rekha", "anju", "sanju", "kanti"];
console.log(sisters);

let info = ["ramesh", 23, 6.2];
console.log(info);
console.log(info.length);
console.log(info[0][3]);

let empty = []; // or, []
console.log(empty);

// array are mutable..
// srtings can not be change..
let name2 = "rohit";
console.log(name[0] = "m");
console.log(name2);

// array can be change
let fruits = ["mango", "apple", "litchi"];
console.log(fruits);
console.log(fruits[0] = "banana");
console.log(fruits);
console.log(fruits[10] = "papaya");
console.log(fruits);

// Array methods..
// push & pop method.
let cars = ["audi", "BMW", "Mahendra", "Xuv"];
console.log(cars);
cars.push("toyota");
console.log(cars);
cars.pop();
console.log(cars);

// unshift and shift method.
let sisters1 = ["rekha", "anju", "sanju", "kanti"];
console.log(sisters1);
sisters1.unshift("shanti");
console.log(sisters1);
sisters1.shift();
console.log(sisters1);


// practice question..
let start = ["january", "july", "march", "august"];
console.log(start);
start.shift();
start.shift();
console.log(start);
start.unshift("july");
start.unshift("june");
console.log(start);

// indexOf
let primary = ["red", "yellow", "blue"];
console.log(primary.indexOf('yellow'));
console.log(primary.indexOf('green'));
console.log(primary.indexOf('Yellow'));

// includes
console.log(primary.includes("red"));
console.log(primary.includes("green"));

// concat and reverse...
let color1 = ["red", "green", "yellow"];
let secondary = ["orange", "green", "violet"];
console.log(color1.concat(secondary));
console.log(color1.reverse());

// slice
let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(2, 3));
console.log(colors.slice(-2)); // getting 2 elements fron last.

// splice and short
let color = ["red", "yello", "blue", "orange", "pink", "white"];
console.log(color.splice(4));
console.log(color.splice(0, 1));
console.log(color);
console.log(color.splice(0, 1, "black", "grey"));
console.log(color);
console.log(color.sort());

let number = [34, 76, 12, 90, 10, 100];
console.log(number.sort());

// practice question
let months = ["january", "july", "march", "august"];
console.log(months.splice(0, 2, "july", "june"));
console.log(months);

let language = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
console.log(language.reverse());
console.log(language.indexOf("javascript"));

//  array references
let arr = ["a", "b"];
let arrCopy = arr;
console.log(arrCopy);
arrCopy.push("c");
console.log(arr);


// constant array
const array = [1, 2, 3];
console.log(array); 
console.log(array.push(4)); 
console.log(array);
// array = [1, 2, 3]; // we can't do this


//nested array
let nums = [[2,4], [3,6], [4,8]];
console.log(nums);

// practice question tic-tac-toe game state.
let game = [['x', null, 'o'], [null, 'x', null], ['o', null, 'x']];
console.log(game);
console.log(game[0][1] = 'o');
console.log(game);

// part 3 practice question starts:.....
let arr1 = [7,9,0,-2];
let n = 3;
let ans = arr1.slice(0,n);
console.log(ans);


let arr2 = [7, 9, 0, -2];
let n2 = 3;
let ans2 = arr2.slice(arr2.length - n);
console.log(ans2);

// let str2 = prompt("please enter a string");
// if (str2.length == 0){
//   console.log("string is empity");
// }else {
//   console.log("string is not empty");
// }


let str3 = "BIBeKvERMa";
let idx = 3;
if (str3[idx] == str[idx].toLowerCase()){
  console.log("character is lowercase: ");
}else{
  console.log("character is not lowercase");
}

// let str4 = prompt("please enter a string");
// console.log(`orignal string = ${str4}`);
// console.log(`string without space = ${str4.trim()}`);


let arr5 = ["hello", "a", 23, 65, 89, -5];
let item = 65;
if (arr5.indexOf(item) != -1){
  console.log("element exists in array");
}else{
  console.log("element doesn't exist in array");
}