import React from "react";

const Knob = (props) => {
  return (
    <div style={{ border: "2px solid green", margin: "15px" }}>
      <h3> this is knob components </h3>

      <p> Steps Here is: {props.steps} </p>
    </div>
  );
};

export default Knob;
