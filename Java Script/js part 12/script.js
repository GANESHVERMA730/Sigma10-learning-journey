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
  try {
    await changeColor("red", 1000);
    await changeColor("yellow", 1000);
    await changeColor("green", 1000);
    await changeColor("purple", 1000);
    await changeColor("blue", 1000);
  } catch (err) {
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

// our first request >> using Fetch(url)
let url = "https://catfact.ninja/fact";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("data1 = ", data.fact);
    return fetch(url);
  })
  .then((response) => {
    return response.json();
  })
  .then((data2) => {
    console.log("data2 = ", data2.fact);
  })
  .catch((err) => {
    console.log("ERROR - ", err);
  });

console.log("this is asynchronous");

// using fetch with async/await
// async function getFacts() {
//   try {
//     let response1 = await fetch(url);
//     let data1 = await response1.json();
//     console.log(data1.fact);

//     let response2 = await fetch(url);
//     let data2 = await response2.json();
//     console.log(data2.fact);
//   } catch (e) {
//     console.log("error = ", e);
//   }
// }

async function getFacts(){
  try{
    let response = await axios.get(url);
    console.log(response.data.fact );
  }catch (e){
    console.log("error - ", e);
  }
}

let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
  let fact = await getFacts();
  console.log(fact);
  let p = document.querySelector("#result");
  p.innerText = fact;
});

async function getFacts(){
  try{
    let response = await axios.get(url);
    return response.data.fact;
  }catch (e){
    console.log("error - ", e);
    return "NO fact found";
  }
}



