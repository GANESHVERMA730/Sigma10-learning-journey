import "./App.css";
import Lottery from "./components/lottery/Lottery";
import Ticket from "./components/ticket/Ticket"
function App() {
  return (
    <>
     <Lottery n={3} winningSum={15} />
    </>
  );
}

export default App;