import React from "react";

function Featured({ type }) {
  return (
    <div className="relative featured">
      {type && (
        <div className="absolute flex items-center text-white category top-36 left-10">
          <span className="text-3xl font-bold">
            {type === "movie" ? "Movies" : "Series"}
          </span>
          <select
            name="genre"
            id="genre"
            className="px-3 py-1 ml-4 text-sm cursor-pointer"
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
        className="object-cover w-full h-full"
      />
      <div className="absolute flex flex-col top-20 info left-10 right-10 ">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
          width="400px"
        />
        <span className="my-5 xl:w-1/2 desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          adipisci repellendus eum quasi illo, velit numquam, maxime tempora
          sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
          temporibus eum earum?
        </span>
        <div className="flex buttons">
          <button className="flex items-center px-4 py-2 mr-3 text-black bg-white rounded-md">
            <i className="mr-2 fas fa-play"></i>
            <span>Play</span>
          </button>
          <button className="flex items-center px-4 py-2 ml-3 text-white bg-gray-400 rounded-md">
            <i className="mr-2 fas fa-info-circle"></i>
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
