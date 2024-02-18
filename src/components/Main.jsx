import React from "react";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import MyShelf from "./MyShelf";
import Contribute from "./Contribute";
import Aside from "./Aside";
const Main = () => {
  return (
    <div className=" flex">
      <Aside />
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/myshelf" element={<MyShelf />} />
          <Route path="/contribute" element={<Contribute />} />
        </Routes>
      </main>
    </div>
  );
};

export default Main;
