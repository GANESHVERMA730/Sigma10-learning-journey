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
  getNum();
  getNum();
  getNum();
}