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
            <div className="icons">
              <i className="fas fa-play"></i>
              <i className="fas fa-plus"></i>
              <i className="fas fa-thumbs-up"></i>
              <i className="fas fa-thumbs-down"></i>
            </div>
            <div className="itemInfoTop">
              <span>1 hour 46 mins</span>
              <span>+16</span>
              <span>2001</span>
            </div>
            <div>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form.
            </div>
            <div>action</div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListItem;
