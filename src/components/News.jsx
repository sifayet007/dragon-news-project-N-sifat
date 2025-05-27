import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
const News = ({ news }) => {
  console.log(news);
  const { author, title, image_url, details } = news;

  return (
    <div>
      <div className="flex justify-between bg-[#F3F3F3] p-5 mt-3">
        <div className="flex gap-5">
          <img className="w-12 rounded-full" src={author.img} alt="" />
          <div>
            <h1 className="font-semibold">{author.name}</h1>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <FaRegBookmark />
          </span>
          <span>
            <CiShare2 />
          </span>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-semibold py-5">{title}</h1>
        <img src={image_url} alt="" />
        <p>{details}</p>
        <button className="text-orange-400">Read More</button>
      </div>
    </div>
  );
};

export default News;
