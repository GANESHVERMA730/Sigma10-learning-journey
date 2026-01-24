for(let i = 1; i<=10; i++){
  console.log(i);
}

// printing all odd number fron 1 to 15
for (let i=1; i<=25; i=i+2){
  console.log(i);
}

console.log("Backwaeds");
for(let i=15; i>=1; i=i-2){
  console.log(i);
}

// printing all even numbers from 2 to 10
for (let i=2; i<=10; i=i+2) {
  console.log(i);
}
console.log("backwards");
for(let i=10; i>=2; i=i-2){
  console.log(i);
}   

// printing the multiplication table for 5
// for (let i=5; i<=50; i=i+5){
//   console.log(i)
// }

// taking input from user
// let n = prompt("write your number");
// n = parseInt(n);
// for (let i=n; i<=n*10; i=i+n){
//   console.log(i)
// }

console.log("Break");

// Nested for loop
for (let i=1; i<=3; i++){
  console.log(`outer loop ${i}`);
  for(let j=1; j<=3; j++){
    console.log(j);
  }
}

// while loop
let i = 0;
while (i<=20){
  console.log(i);
  i++;
}

// favorit movie game 
// const favoriteMovie = "Ironman";
// let guess = prompt("guess my favorit movie name: ");
// while ((guess != favoriteMovie) && (guess != "quit")){
//   guess = prompt(" wrong guess. please try again: ");
// }

// if (guess == favoriteMovie){
//   console.log("congrats!!");
// }else{
//   console.log("you quit");
// }
 
// break keyword
let j = 1;
while(j<=5){
  if(j==3){
    break;
  }
  console.log(j);
  j++;
}
console.log("we used break at 3");

// lopes with arrays 
let fruits = ["mango", "apple", "banana", "litchi", "orange"];
for (let i=0; i<fruits.length; i++){
  console.log(i, fruits[i]);
}

// backward
for (let i=fruits.length-1; i>=0; i--){
  console.log(i, fruits[i]);
}

// nested loops with arrays 
let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];

for (let i=0; i<heroes.length; i++){
  console.log(`list ${i}`);
  for(let j = 0; j<heroes[i].length; j++){
    console.log(heroes[i][j]);
  }
}

// for of loop
let faal = ["aamb", "shep", "kela", "santara", "anar"];
for (faals of faal){
  console.log(faals);
}

for (char of "hamarCollage"){
  console.log(char);
}










