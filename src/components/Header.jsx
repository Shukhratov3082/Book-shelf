import React from "react";
import Lang from "../assets/images/main/Translate.svg";
import Time from "../assets/images/main/Time.svg";
import Calendar from "../assets/images/main/Calendar.svg";
import Profile from "../assets/images/main/Profile.png";
import Search2 from "../assets/images/main/Search.svg";
import Scanner from "../assets/images/main/Scanner.svg";
const Header = () => {
  return (
    <header className="pt-9 flex gap-5">
      <div className="flex gap-3 rounded-large py-1 px-6 bg-white shadow-xl">
        <select name="" id="">
          <option value="">All</option>
        </select>
        <input type="text" placeholder="Search" />
        <div className="flex gap-3">
          <img src={Search2} alt="" />
          <hr className="h-2/3 my-auto w-[2px] bg-gray" />
          <img src={Scanner} alt="" />
        </div>
      </div>

      <div className="rounded-large shadow-xl bg-white  flex gap-3 px-6 py-1">
        <img src={Lang} alt="" />
        <select id="myDropdown" name="myDropdown">
          <option value="option1">Lang</option>
          <option value="option1">RU</option>
          <option value="option1">EN</option>
        </select>
      </div>
      <div className="flex bg-white rounded-large shadow-xl gap-16 px-5 py-1">
        <div className="flex gap-2 items-center">
          <img src={Time} alt="" />
          <p>09:00 AM</p>
        </div>
        <div className="flex gap-2 items-center">
          <img src={Calendar} alt="" />
          <p>4-Mar-2023</p>
        </div>
      </div>
      <div className="flex gap-2 bg-white px-5 py-1 rounded-large shadow-xl">
        <img src={Profile} alt="" />
        <select name="" id="">
          <option value="">Kenson</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
