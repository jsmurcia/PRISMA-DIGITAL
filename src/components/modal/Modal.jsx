import React from "react";
import { Button } from "../button";

export const Modal = ({ show, children }) => {
  return (
    <div
      className={`w-screen h-full ${
        show ? "flex" : "hidden"
      } bg-[rgba(183,180,180,0.4)] justify-center absolute p-10
    `}
    >
      <div className="w-11/12 sm:w-6/12 lg:w-4/12 bg-white z-10 h-fit">
        {children}
      </div>
    </div>
  );
};
