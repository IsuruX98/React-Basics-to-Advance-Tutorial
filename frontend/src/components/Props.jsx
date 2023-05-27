import React from "react";

const Props = (props) => {
  return (
    <div>
      <h1>{props.heading}</h1>
      <h2>{props.name}</h2>
      {props.paragraph}
      <hr />
    </div>
  );
};

export default Props;
