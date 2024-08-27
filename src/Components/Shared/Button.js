import React from "react";

const Button = (props) => {
  return (
    <button
      className={`${props.bgColor} ${props.textColor} cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 text-sm`}
      onClick={props.handler}
    >
      {props.text}
    </button>
  );
};

export default Button;
