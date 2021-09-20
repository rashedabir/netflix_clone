import React, { useRef, useState } from "react";
import ListItem from "./ListItem";

function List() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    const distance = listRef.current.getBoundingClientRect().x - 38;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${235 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-235 + distance}px)`;
    }
  };

  return (
    <div className="w-full list mt-2.5">
      <span className="ml-12 text-xl font-bold text-white capitalize listtitle">
        continue to watch
      </span>
      <div className="relative flex items-center wrapper">
        <i
          style={{ display: !isMoved && "none" }}
          className="absolute top-0 bottom-0 left-0 z-50 py-10 text-5xl text-white bg-gray-900 fas fa-chevron-left"
          onClick={() => {
            handleClick("left");
          }}
        ></i>
        <div
          className="flex ml-10 transition-all duration-1000 ease-linear transform translate-x-0 w-max"
          ref={listRef}
        >
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
        </div>
        <i
          className="absolute top-0 bottom-0 right-0 z-50 py-10 text-5xl text-white bg-gray-900 py65 worder-2 fas fa-chevron-right"
          onClick={() => {
            handleClick("right");
          }}
        ></i>
      </div>
    </div>
  );
}

export default List;
