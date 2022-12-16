import React from "react";

export const Button = ({
  onClick = () => {},
  text = "",
  classButton = "bg-purple text-white ",
}) => {
  return (
    <button className={`${classButton} rounded-none w-36 border-none`} onClick={onClick}>
      {text}
    </button>
  );
};
