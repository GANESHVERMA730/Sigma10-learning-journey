let arr = [1,2,3];
arr.sayHello = () => {
  console.log("hello!, I am arr");
};

// factory function
function personMaker(name, age){
  const person = {
    name: name,
    age: age,
    talk(){
      console.log(`Hi, my name is ${this.name}`);
    },
  };
  return person
}

let p1 = personMaker("admin", 22);
let p2 = personMaker("yogi", 32);