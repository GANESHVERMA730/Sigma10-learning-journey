//  Async function >> 
// async keyword:

// async function greet() {
//   throw "weak connection"
//   return "hello world";
// }

// greet()
//   .then((result) => {
//     console.log("promise was successful");
//     console.log("result was: ", result);
//   })
//   .catch((error) => {
//     console.log("promise was not successful error arived: ", error);
//   })

// let demo = async () => {
//   return 5;
// }

// await keyword
function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      resolve();
    }, 1000);
  });
}

async function demo() {
  await getNum();
  await getNum();
  await getNum();
  await getNum();
  await getNum();
  await getNum();
  getNum();
}

h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      if (num > 3) {
        reject("promise rejected");
      }

      h1.style.color = color;
      console.log(`color changed to ${color}!`);
      resolve("color changed!")
    }, delay);
  });
}

async function demo() {
  try{
  await changeColor("red", 1000);
  await changeColor("yellow", 1000);
  await changeColor("green", 1000);
  await changeColor("purple", 1000);
  await changeColor("blue", 1000);
  }catch(err){
    console.log("error caught");
    console.log(err);
  }


  let a = 7
  console.log(a);
  console.log("new Number = ", a + 3);
}

// APIs concept 
let jsonRes = '{"fact":"Cats see six times better in the dark and at night than humans.","length":63}'

// console.log(jsonRes.fact);
let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);

let student = {
  name: "bibek",
  marks: 67,
};