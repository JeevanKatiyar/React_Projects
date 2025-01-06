import { useState } from "react";

import "./App.css";
import { use } from "react";

function App() {
  const [counter, setCounter] = useState(false);
  const addValue = () => {
    setCounter(counter + 1);
  };
  const subValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>React Project </h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>ADD </button> {""}
      <button onClick={subValue}>REMOVE </button>
      <p>Footer</p>
    </>
  );
}

export default App;
