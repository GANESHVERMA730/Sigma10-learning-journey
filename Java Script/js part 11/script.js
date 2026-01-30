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

function changeColor(color, delay, nextColorChange) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextColorChange) nextColorChange();
  }, delay);
}

//calbacks nesting. and we called it as callback hell
changeColor("red", 1000, () => {
  changeColor("green", 1000, () => {
    changeColor("purple", 1000, () => {
      changeColor("yellow", 1000, () => {
        changeColor("blue", 1000);
      });
    });
  });
});


// promises
function savetoDb(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 4) {
    success();
  } else {
    failure();
  }
}

savetoDb("hello javascript", () => {
  console.log("success: your data was saved");
  savetoDb("hello bibek", () => {
    console.log("success2 : data2 saved");
    savetoDb("bibek", ()=>{
      console.log("success: bibek was saved");
    }, ()=>{
      console.log("failure: bibek was not saved.");
    });
  }, () => {
    console.log("failure2: weak connection");
  });
}, () => {
  console.log("failure: Weak connection. data not saved");
});
