import React from "react";
import Watch from "../../Watch/Watch";

const DeviceDetails = (props) => {
  return (
    <div>
      <div>
        <p> it's Your price {props.price} </p> |
      </div>
      <Watch></Watch>
    </div>
  );
};

export default DeviceDetails;
