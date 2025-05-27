import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";

const SocialLogin = () => {
  return (
    <div>
      <h3 className="font-semibold">Login with</h3>
      <div className="mt-5 flex flex-col space-y-2 ">
        <button className="flex items-center justify-center gap-2 border-2 border-blue-500 py-2 rounded-md ">
          <FcGoogle /> Login with Google
        </button>
        <button className="flex items-center gap-2 border-2 justify-center border-blue-500 py-2 rounded-md ">
          <IoLogoGithub />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
