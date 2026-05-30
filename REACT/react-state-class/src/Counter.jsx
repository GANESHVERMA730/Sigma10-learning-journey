import { useState } from "react";
function init(){
  return Math.random();
}

export default function Counter() {
  let [count, setCount] = useState(init);  // initialization

  let incCount = () => {
    setCount((currCount) => {
      return currCount + 1;
    });
    // setCount((currCount) => {
    //   return currCount + 1;
    // });

    // setCount(34);
    // setCount(count + 1);
    // console.log(count);
  };

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  );
}
