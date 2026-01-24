// Qs1.Write a JSprogram to delete all occurrences of element ‘num’ inagivenarray.
let arr = [1,2,3,4,5,6,2,3];
let num = 2;

for(let i=0; i<arr.length; i++){
  if(arr[i] == num){
    arr.splice(i, 1);
  }
}
console.log(arr);

// Qs2.Write a JS program to find the no of digits in a number.
let number = 287152;
let count = 0;

let copy = number;
while (copy > 0){
  count++;
  copy = Math.floor(copy/10);
}
console.log(count);

// Qs3.Write a JS program to find the sum of digits in a number.
let number1 = 287152;
let sum = 0;

let copy1 = number1;
while(copy1 > 0){
  let digit = copy1 % 10; // to get last digit
  sum += digit;
  copy1 = Math.floor(copy1/10);
}
console.log(sum);

// Qs4. Print the factorial of a number n.
let n = 5;
let fact = 1;

for (let i = 1; i<=n; i++){
  fact *= i;
}
console.log(fact);

// Find the largest number in a narray with only positive numbers.
let arr2 = [2, 4, 7, 3, 9, 6, 1, 5];
let largest = 0;
for (let i=0; i<=arr2.length; i++){
  if(largest < arr2[i]){
    largest = arr2[i];
  }
}
console.log(largest);