
import { useState } from "react"
import './App.css';



function App() {
  const [number, setNumber] = useState(0)
  const handleAdd = () => {

    // console.log("Iam adding")
    setNumber(number + 1)
  }
  const handleSubtract = () => {
    // console.log("Iam Subtracting")
    setNumber(number - 1)
  }
  return (
    <div className="App">


      <h1>{number}</h1>
      <button onClick={handleAdd}>+ </button>
      <button onClick={handleSubtract}>-</button>

    </div >
  );
}

export default App;
