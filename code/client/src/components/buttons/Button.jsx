import React from "react";
import './Button.css'

const button = (props) => {
  return (
    <div>
      <button className="btn"> {props.name} </button>
    </div>
  );
};

export default button;
