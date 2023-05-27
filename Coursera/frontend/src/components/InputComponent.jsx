import React from "react";
import { useState } from "react";

const InputComponent = () => {
  const [text, setText] = useState("Hello");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>you typed : {text}</p>
      <button
        onClick={() => {
          setText("Hello");
        }}
      >
        Reset
      </button>
      <hr />
    </div>
  );
};

export default InputComponent;
