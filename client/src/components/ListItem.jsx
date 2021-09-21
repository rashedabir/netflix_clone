import React from "react";
import { useState } from "react/cjs/react.development";

function ListItem({ index }) {
  const [isHover, setIsHover] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <div
      className="h-32 mr-2 overflow-hidden text-white cursor-pointer w-60 list_item"
      style={{
        backgroundColor: "#0b0b0b",
        left: isHover && index * 255 - 50 + index * 2.5,
      }}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <img
        className="object-cover w-full h-full"
        src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/08/marvels-avengers.jpg"
        alt=""
      />
      {isHover && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="flex flex-col p-5 item_info">
            <div className="text-sm icons">
              <i className="p-2 border-2 border-white fas fa-play rounded-3xl mr-1.5 mb-2"></i>
              <i className="p-2 border-2 border-white fas fa-plus rounded-3xl mr-1.5 mb-2"></i>
              <i className="p-2 border-2 border-white fas fa-thumbs-up rounded-3xl mr-1.5 mb-2"></i>
              <i className="p-2 border-2 border-white fas fa-thumbs-down rounded-3xl mr-1.5 mb-2"></i>
            </div>
            <div className="mb-1 text-sm itemInfoTop">
              <span className="text-gray-400 mr-2.5">1 hour 46 mins</span>
              <span className="text-gray-400 mr-2.5 border-2 border-gray-400 p-1">
                +16
              </span>
              <span className="text-gray-400 mr-2.5">2001</span>
            </div>
            <div className="mb-1 text-sm">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used.
            </div>
            <div>action</div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListItem;
