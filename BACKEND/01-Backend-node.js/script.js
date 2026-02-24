// let n = 5;

// for (let i = 0; i < n; i++){
//   console.log("hello, ", i);
// }

// console.log(process.argv);

// let args = process.argv;

// for (let i=2; i<args.length; i++){
//   console.log("hello to ", args[i]);
// }

// console.log(process.argv);

// const math = require("./math");

// console.log(math.sum(3, 5));
// console.log(math.PI);
// console.log(math.mul(3, 6));
// console.log(math.g);

// const info = require("./Fruits");
// console.log(info);
// // or, 
// console.log(info[0].name);


// const figlet = require("figlet");

// figlet("Bibek Verma!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });


import {sum, PI} from"./math.js";
import { generate } from "random-words";

console.log(sum(1, 2));
console.log(generate());





