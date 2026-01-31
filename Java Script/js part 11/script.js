// call stack // breakpoint
function one() {
  return 1;
}

function two() {
  return one() + one();
}

function three() {
  let ans = two() + one();
  console.log(ans);
}
three();

// Js is Single Threaded language.
let a = 25;
console.log(a);
let b = 10;
console.log(b);
console.log(a + b);


setTimeout(() => {
  console.log("bibek verma")
}, 2000);

console.log("hello boy");

// callback hell
h1 = document.querySelector("h1");

// setTimeout(()=>{
//   h1.style.color = "red";
// }, 1000);

// setTimeout(()=>{
//   h1.style.color = "green";
// }, 2000);

// setTimeout(()=>{
//   h1.style.color = "purple";
// }, 3000);

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed!")
    }, delay);
  });
}

changeColor("red", 1000)
.then(()=>{
  console.log("color was changed to red");
  return changeColor("orange", 1000);
})
.then(()=> {
  console.log("color was changed to orange");
  return changeColor("green", 1000);
})
.then(()=>{
  console.log("color was changed to green");
  return changeColor("blue", 1000);
})
.then(()=>{
  console.log("color was changed to blue");
});


//calbacks nesting. and we called it as callback hell
// changeColor("red", 1000, () => {
//   changeColor("green", 1000, () => {
//     changeColor("purple", 1000, () => {
//       changeColor("yellow", 1000, () => {
//         changeColor("blue", 1000);
//       });
//     });
//   });
// });


// promises
// function savetoDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;

//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDb(
//   "hello javascript",
//   () => {
//     console.log("success: your data was saved");

//     savetoDb(
//       "hello bibek",
//       () => {
//         console.log("success2 : data2 saved");

//         savetoDb(
//           "bibek",
//           () => {
//             console.log("success: bibek was saved");
//           },
//           () => {
//             console.log("failure: bibek was not saved.");
//           }
//         );
//       },
//       () => {
//         console.log("failure2: weak connection");
//       }
//     );
//   },
//   () => {
//     console.log("failure: Weak connection. data not saved");
//   }
// );


function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success: data was saved");
    } else {
      reject("failure: weak connection");
    }
  });
}

// savetoDb("apna collage")
//  .then(() => {
//   console.log("promise was resolved");
// })
//   .catch(() => {
//     console.log("promise was rejected");
//   });

savetoDb("hello bibek")
  .then((result) => {
    console.log("data1 saved.");
    console.log("result of promise: ", result);
    return savetoDb("hello world");
  })
  .then((result) => {
    console.log("data2 saved");
    console.log("result of promise: ", result);
    return savetoDb("hello ganesh");
  })
  .then((result) => {
    console.log("data3 saved");
    console.log("result of promise: ", result);
  })
  .catch((error) => {
    console.log("promise was rejected");
    console.log("error of promise: ", error);
  });