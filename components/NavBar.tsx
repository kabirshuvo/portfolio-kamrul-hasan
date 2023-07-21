import React from "react";

const NavBar = () => {
  return (
    <div className="justify-center items-center text-center flex flex-col text-xl text-white font-bold pt-7">
      <span className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
        A Big B
      </span>
      <br />
      <span className="text-sm -mt-7">My Print on Demand Initiative</span>
    </div>
  );
};

export default NavBar;
