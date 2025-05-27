import { FaRegBookmark } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { useState } from "react";
const News = ({ news }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  console.log(news);
  const { author, title, image_url, details } = news;
  const wordLimit = 50;
  const word = details.split(" ");
  const isLong = word.length > wordLimit;
  const preview = word.slice(0, wordLimit).join(" ") + "...";
  const toggleDetails = () => setIsExpanded(!isExpanded);

  return (
    <div className="px-5">
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
        <p className="mt-5">{isExpanded || !isLong ? details : preview}</p>
        <button
          onClick={toggleDetails}
          className="text-orange-500 mt-2 font-medium hover:underline"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default News;
