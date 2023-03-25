import React from "react";
import Knob from "../knob/knob";

const Dial = (props) => {
  return (
    <div style={{ border: "2px solid blue", margin: "20px" }}>
      <h3> Your Steps Count {props.steps} </h3>
      <Knob steps={props.steps}></Knob>
    </div>
  );
};

export default Dial;
