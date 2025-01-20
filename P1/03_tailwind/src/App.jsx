import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className=" bg-green-300 p-3 rounded-md"> Vite with Tailwind</h1>
      <br></br>
      <Card username="jeevan" post="front Engineer" />
      <br></br>
      <Card username="Akanksha" post="Back end Engineer" />
      <br></br>``
      <Card />
    </>
  );
}

export default App;
