import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-[#F3F3F3] h-screen font-poppins">
      <header className="w-11/12 mx-auto ">
        <Navbar />
      </header>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
<h1>login</h1>;
