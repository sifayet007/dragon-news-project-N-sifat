import React from "react";
import { Link } from "react-router-dom";
import navUser from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mt-5">
      <div></div>
      <div className="space-x-5 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="flex gap-3">
        <img src={navUser} alt="" />
        <button className="py-1 px-4 rounded-md bg-[#403F3F] text-white">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
