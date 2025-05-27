import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftNavbar from "../components/layout-components/LeftNavbar";
import RightNavbar from "../components/layout-components/RightNavbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header className="">
        <Header />
        <section className="w-11/12 mx-auto">
          <LatestNews />
        </section>
      </header>
      <nav className="w-11/12 mx-auto">
        <Navbar />
      </nav>
      <main className="grid md:grid-cols-12 w-11/12 mx-auto">
        <aside className="col-span-3">
          <LeftNavbar />
        </aside>
        <section className="col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3">
          <RightNavbar />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
