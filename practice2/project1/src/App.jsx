import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 15;

  const addValue = () => {
    console.log("value addeed", Math.random());
    counter = counter + 1;
    setCounter(counter);
  };
  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
  };

  
return (
    <>
      <h1>Sankar And React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <br />
      <p>Footer {counter}</p>
    </>
  );
}

export default App;
