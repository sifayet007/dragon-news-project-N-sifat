import { useLoaderData } from "react-router-dom";
import News from "../components/News";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  console.log(news);

  return (
    <div>
      <h1 className="font-semibold">Dragon News Home</h1>
      <p>{news.length} News Found On This Category</p>
      <div>
        {news.map((singleNews) => (
          <News key={singleNews._id} news={singleNews}></News>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
