// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function (){
//   alert("button was clicked");
// }

let btns = document.querySelectorAll("button");

for (btn of btns){
  // btn.onclick = sayHello;
  // btn.onmouseenter = function(){
  //   console.log("you entered a button");
  // };
  // console.dir(btn);
  // btn.addEventListener("click", sayHello);
  // btn.addEventListener("click", sayName);
  // btn.addEventListener("dblclick", function(){
  //   console.log("you double clicked me");
  // });
};

function sayHello(){
  alert("Hello!");
}

function sayName(){
  alert("aur batao!");
}

let p = document.querySelector("p");

p.addEventListener("click", function (){
  console.log("para was clicked");
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function(){
  console.log("mouse inside box");
});

let bttn = document.querySelector(".thisbtn");

bttn.addEventListener("click", function () {
  console.dir(this.innerText);
  this.style.backgroundColor = "blue";
});













