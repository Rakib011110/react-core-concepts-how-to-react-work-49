import React from "react";
import DeviceDetails from "./DeviceDetails/DeviceDetails";

const Device = (props) => {
  console.log(props);
  return (
    <div>
      <h4> This the Device {props.name} </h4>
      <DeviceDetails price={props.price}> </DeviceDetails>
    </div>
  );
};

export default Device;
