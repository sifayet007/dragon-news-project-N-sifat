import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  console.log(import.meta.env.VITE_a);
  return (
    <div>
      <h3 className="font-semibold">All category ({categories.length})</h3>
      <div className="flex flex-col gap-3 mt-5">
        {categories.map((category) => (
          <NavLink
            className="py-1.5 flex justify-center shadow-sm rounded-md "
            to={`/category/${category.category_id}`}
            key={category.category_id}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
