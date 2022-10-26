import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="flex items-center">
        <img className="w-5/12" src={props.src} alt="" />
        <span className="text-lg text-center font-bold font-serif text-black">
          {props.msg}
        </span>
      </div>
    </>
  );
};

export default Card;
