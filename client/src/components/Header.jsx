import React, { useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container flex items-center justify-between h-20 px-3 mx-auto">
        <div className="flex items-center left">
          <i className="px-2 mr-8 text-xl bg-black border-2 rounded-sm cursor-pointer xl:hidden fas fa-bars mobile_icon lg:hidden sm:flex"></i>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="netflix"
            className="w-32 h-10 mr-10 cursor-pointer"
          />
          <ul className="hidden xl:flex nav_items">
            <li className="mx-3.5 mt-2.5 cursor-pointer capitalize">
              homepage
            </li>
            <li className="mx-3.5 mt-2.5 cursor-pointer capitalize">series</li>
            <li className="mx-3.5 mt-2.5 cursor-pointer capitalize">movies</li>
            <li className="mx-3.5 mt-2.5 cursor-pointer capitalize">
              news & popular
            </li>
            <li className="mx-3.5 mt-2.5 cursor-pointer capitalize">my list</li>
          </ul>
        </div>
        <div className="flex items-center right">
          <i className="mx-2 cursor-pointer fas fa-search"></i>
          <i className="mx-5 cursor-pointer fas fa-bell"></i>
          <img
            src="https://rashed-abir.web.app/static/media/rashed%20abir.bad348d4.JPEG"
            alt=""
            width="35px"
            className="object-cover rounded-lg"
          />
          <div className="profile">
            <i className="mx-5 mr-0 cursor-pointer fas fa-sort-down arrow_icon"></i>
            <div className="capitalize option">
              <span className="p-3 cursor-pointer">settings</span>
              <span className="p-3 cursor-pointer">logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
