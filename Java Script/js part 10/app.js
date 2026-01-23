// let smallImages = document.getElementsByClassName("oldImg");

// for (let i = 0; i < smallImages.length; i++) {
//   smallImages[i].src = "assets/spiderman_img.png";
//   console.dir(`value of image no. ${i} is changed.`);
// }
console.dir(document.getElementsByClassName("hbsj"));

// console.dir(document.getElementsByTagName("p")[1].innerText = "abc");
console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelectorAll("div a"));

 let links = document.querySelectorAll(".box a");
 for(let i=0; i<links.length; i++){
  links[i].style.color = "yellow"
 }

 let img = document.querySelector('img');
 console.dir(img);

 let heading = document.querySelector("h1");
 console.dir(heading.classList);

 heading.classList.add("green");

//  heading.classList.remove("green");
console.dir(heading.classList);
console.dir(heading.classList.contains("underline"));
console.dir(heading.classList.contains("green"));

console.dir(heading.classList.toggle("green"));
console.dir(heading.classList.toggle("underline"));

let box = document.querySelector(".box");
box.classList.add("boxBg");

let h4 = document.querySelector('h4');
console.log(h4.parentElement);
console.log(box.children);

let ul = document.querySelector("ul");
console.log(ul.parentElement);
console.log(ul.childElementCount);
console.log(ul.children);

console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children[2]);

console.log(ul.children[2].previousElementSibling);
console.log(ul.children[1].previousElementSibling);
console.log(ul.children[2].nextElementSibling);
console.log(ul.children[1].nextElementSibling);

console.log(img.previousElementSibling);
console.log(img.previousElementSibling.style.color="green");

console.log(document.createElement("p"));
let newp = document.createElement('p');
console.dir(newp);
console.log(newp.innerText = "hello this is a new para ");
console.dir(newp);

let body = document.querySelector('body');
console.log(body.appendChild(newp));
//or
box.appendChild(newp);

// let btn = document.createElement('button');
// console.dir('btn');
// console.dir(btn);
// btn.innerText = "click me!!";
// box.appendChild(btn);

newp.append("and this is new text");

// newp.append(btn)
box.prepend(newp); // to add at starting

let btn = document.createElement('button');
console.dir(btn.innerHTML = "NEW BUTTON!!");

let p = document.querySelector('p');
p.insertAdjacentElement('beforebegin', btn)

// body.removeChild(btn);
// or
btn.remove();



//  PRACTICE QS
// Add the following elements to the container using only javascript amd DOM methods.

// 1. a<p> with red text that say "hey I'mm red!"
let para1 = document.createElement('p')
para1.innerText = "hey I'm red!";
document.querySelector("body").append(para1)

para1.classList.add("red");

// 2. an <h3> with blue text that says "I'm a blue h3!"
let h3 = document.createElement('h3');
h3.innerText = "I'm a blue h3!"
document.querySelector("body").append(h3);
h3.classList.add("h3")


// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says "i'm in a div"
// a <p> that says "ME TOO!"

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I'm in a div";
para2.innerText = "Me TOO!";

div.append(h1);
div.append(para2);
div.classList.add("box1")
document.querySelector("body").append(div);