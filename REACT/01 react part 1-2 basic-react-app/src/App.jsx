import "./App.css";
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";

function Description() {
  return (
    <h3>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium quis
      natus cumque incidunt minus cupiditate saepe dolores fuga inventore esse.
    </h3>
  );
}

function App() {
  return (
    <>
      <Title />
      <Description />
      <Title />
      <Description />

      <MsgBox userName="Ganesh" textColor="red" />
      <MsgBox userName="Rahul" textColor="blue" />
      <MsgBox userName="Priya" textColor="green" />
      <MsgBox userName="esha" textColor="purple" />
      <h2>Blockbuster Deals | Shop Now</h2>
      <ProductTab />
    </>
  );
}

// // activity:
// function App() {
//   return(

//   <div>
//     <MsgBox userName="Ganesh" textColor="red"/>
//     <MsgBox userName="Rahul" textColor="blue"/>
//     <MsgBox userName="Priya" textColor="green"/>
//     <MsgBox userName="esha" textColor="purple"/>
//   </div>
//   );
// }

export default App;
