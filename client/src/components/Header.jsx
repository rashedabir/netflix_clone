import React, { useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container mx-auto px-3 flex items-center justify-between h-20">
        <div className="left flex">
          <img
            width="130px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="netflix"
            className="mr-10 cursor-pointer"
          />
          <span className="mx-3.5 capitalize pt-1 cursor-pointer">
            homepage
          </span>
          <span className="mx-3.5 capitalize pt-1 cursor-pointer">series</span>
          <span className="mx-3.5 capitalize pt-1 cursor-pointer">movies</span>
          <span className="mx-3.5 capitalize pt-1 cursor-pointer">
            new and popular
          </span>
          <span className="mx-3.5 capitalize pt-1 cursor-pointer">my list</span>
        </div>
        <div className="right flex items-center">
          <i className="fas fa-search mx-5 cursor-pointer"></i>
          <span className="capitalize cursor-pointer">kid</span>
          <i className="fas fa-bell mx-5 cursor-pointer"></i>
          <img
            src="https://rashed-abir.web.app/static/media/rashed%20abir.bad348d4.JPEG"
            alt=""
            width="35px"
            className="rounded-lg object-cover"
          />
          <div className="profile">
            <i className="fas fa-sort-down mx-5 arrow_icon mr-0 cursor-pointer"></i>
            <div className="option capitalize">
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
