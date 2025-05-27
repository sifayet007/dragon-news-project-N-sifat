import React from "react";
import { FaFacebook, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h3 className="font-semibold text-lg">Find Us On</h3>
      <div className="flex flex-col border-2 rounded-md *:pl-5 mt-5">
        <button
          className="flex items-center gap-3 border-b-2 py-2
        "
        >
          <FaFacebook className="text-blue-500" /> Facebook
        </button>
        <button className="flex items-center gap-3 border-b-2 py-2">
          <FaInstagram className="text-pink-400 " />
          Instagram
        </button>
        <button className="flex items-center gap-3 py-2">
          <FaTwitter className="text-blue-400 " />
          Twitter
        </button>
      </div>
    </div>
  );
};

export default FindUs;
