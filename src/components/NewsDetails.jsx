import React from "react";
import Header from "./Header";
import RightNavbar from "./layout-components/RightNavbar";
import { Link, useLoaderData } from "react-router-dom";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(news);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="grid grid-cols-12 w-11/12 mx-auto font-poppins">
        <section className="col-span-9">
          <h2 className="font-semibold">Dragon News</h2>
          <div className="mt-5 px-10 shadow-lg mx-4">
            <img className="w-full" src={news.image_url} alt="" />
            <h1 className="font-bold text-2xl py-3">{news.title}</h1>
            <p>{news.details}</p>
            <div className="py-5">
              <Link className="bg-red-700 p-2 text-white " to="/category/01">
                All news in this category
              </Link>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNavbar />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
<h2>card details</h2>;
