import React from "react";
import ListItem from "./ListItem";

function List() {
  return (
    <div className="w-full list mt-2.5">
      <span className="ml-12 text-xl font-bold text-white capitalize listtitle">
        continue to watch
      </span>
      <div className="relative flex items-center wrapper">
        <i className="py-10 text-5xl text-white bg-gray-900 absolt-0 fas fa-chevron-left"></i>
        <div className="flex ml-2 w-max">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <i className="absolute right-0 py-10 text-5xl text-white bg-gray-900 py65 worder-2 fas fa-chevron-right"></i>
      </div>
    </div>
  );
}

export default List;
