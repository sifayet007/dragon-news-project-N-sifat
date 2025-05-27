import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md">
      <p className="bg-[#D72050] rounded-md text-white py-1 px-3">Latest</p>
      <Marquee pauseOnHover className="space-x-6">
        <Link to="news">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
          perspiciatis.
        </Link>
        <Link to="news">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
          perspiciatis.
        </Link>
        <Link to="news">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
          perspiciatis.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
