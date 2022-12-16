import React from "react";

export const Header = () => {
  return (
    <div className="h-40 w-full justify-center flex flex-col items-start">
      <img
        src="/src/assets/image4.png"
        className="w-32 h-36 md:w-36 md:h-36 ml-4 object-fill"
      />
      <div className="w-full h-5 bg-purple"></div>
    </div>
  );
};
