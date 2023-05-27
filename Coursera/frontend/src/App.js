import "./App.css";
import Props from "./components/Props";
import InputComponent from "./components/InputComponent";
import MultipleInputComponent from "./components/MultipleInputComponent";
import Fruits from "./components/Fruits";
import FruitsCounter from "./components/FruitsCounter";
import { useState } from "react";

function App() {
  const [fruits] = useState([
    { fruitName: "apple", id: 1 },
    { fruitName: "apple", id: 2 },
    { fruitName: "plum", id: 3 },
  ]);

  return (
    <div>
      <Props heading="Welcome" name="Isuru Madusanka" />
      <Props paragraph={<p>paragraph is here form the props</p>} />
      <InputComponent />
      <MultipleInputComponent />
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </div>
  );
}

export default App;
