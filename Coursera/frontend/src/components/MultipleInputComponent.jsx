import React, { useRef } from "react";
import { useState } from "react";

const MultipleInputComponent = () => {
  const [form, setform] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };

  return (
    <div>
      <h1>Multiple Input Component</h1>
      <label>
        First name:
        <input
          type="text"
          value={form.name}
          onChange={(e) => {
            setform({ ...form, name: e.target.value });
          }}
        />
      </label>
      <p>you type as name : {form.name}</p>
      <label>
        Email :
        <input
          type="email"
          value={form.email}
          onChange={(e) => {
            setform({ ...form, email: e.target.value });
          }}
        />
      </label>
      <p>you type as email : {form.email}</p>
      <label>
        Mobile :
        <input
          type="email"
          value={form.mobile}
          onChange={(e) => {
            setform({ ...form, mobile: e.target.value });
          }}
        />
      </label>
      <p>you type as mobile : {form.mobile}</p>
      <button
        onClick={() => {
          setform({ name: "", email: "", mobile: "" });
        }}
      >
        Reset
      </button>
      <br />
      <input ref={inputEl} type="text" />
      <br />
      <button onClick={onButtonClick}>Focus the input</button>
      <hr />
    </div>
  );
};

export default MultipleInputComponent;
