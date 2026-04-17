import "./App.css";
import Title from "./Title.jsx";

function Description() {
  return <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium quis natus cumque incidunt minus cupiditate saepe dolores fuga inventore esse.</h3>
}

function App() {
  return (
    <div>
      {/* /* <h1>this is my app component</h1>
      <p>inside app component we have: </p> */ }
      <Title />
      <Description />
      <Title />
      <Description />
    </div>
  );
}

export default App;
