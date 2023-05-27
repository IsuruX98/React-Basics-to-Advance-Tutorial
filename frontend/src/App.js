import "./App.css";
import Props from "./components/Props";
import InputComponent from "./components/InputComponent";
import MultipleInputComponent from "./components/MultipleInputComponent";

function App() {
  return (
    <div>
      <Props heading="Welcome" name="Isuru Madusanka" />
      <Props paragraph={<p>paragraph is here form the props</p>} />
      <InputComponent />
      <MultipleInputComponent />
    </div>
  );
}

export default App;
