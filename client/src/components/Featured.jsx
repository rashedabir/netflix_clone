import React from "react";

function Featured({ type }) {
  return (
    <div className="featured relative">
      {type && (
        <div className="category absolute top-36 left-10 text-white flex items-center">
          <span className="text-3xl font-bold">
            {type === "movie" ? "Movies" : "Series"}
          </span>
          <select
            name="genre"
            id="genre"
            className="cursor-pointer ml-4 text-sm px-3 py-1"
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="info w-4/12 absolute bottom-48 left-10 flex flex-col">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
          width="400px"
        />
        <span className="desc my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          adipisci repellendus eum quasi illo, velit numquam, maxime tempora
          sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
          temporibus eum earum?
        </span>
        <div className="buttons flex">
          <button className="py-2 px-4 items-center mr-3 bg-white text-black rounded-md">
            <i className="fas fa-play mr-2"></i>
            <span>Play</span>
          </button>
          <button className="py-2 px-4 items-center bg-gray-400 text-white ml-3 rounded-md">
            <i className="fas fa-info-circle mr-2"></i>
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
