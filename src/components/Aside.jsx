import React from "react";
import Logo from "../assets/images/Logo.svg";
import HomeIcon from "../assets/images/aside/Home.svg";
import Search from "../assets/images/aside/Search.svg";
import BookShelf from "../assets/images/aside/Bookshelf.svg";
import Gift from "../assets/images/aside/Gift.svg";
import { NavLink } from "react-router-dom";
const Aside = () => {
  return (
    <aside className="px-9 h-screen sticky min-w-[16%] py-9 flex flex-col justify-between items-start bg-white">
      <img className="mb-24" src={Logo} alt="" />
      <nav className="mb-auto">
        <ul className="space-y-6">
          <li className="flex gap-4">
            <img src={HomeIcon} alt="" />
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className="flex gap-4">
            <img src={Search} alt="" />
            <NavLink to="/search">Search</NavLink>
          </li>
          <li className="flex gap-4">
            <img src={BookShelf} alt="" />
            <NavLink to="/myshelf">My Shelf</NavLink>
          </li>
          <li className="flex gap-4">
            <img src={Gift} alt="" />
            <NavLink to="/contribute">Contribute</NavLink>
          </li>
        </ul>
      </nav>
      <div className="">
        <p>About</p>
        <p>Support</p>
        <p>Terms & Condition</p>
      </div>
    </aside>
  );
};

export default Aside;
