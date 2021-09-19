import React from "react";
import Featured from "../components/Featured";
import Header from "../components/Header";
import List from "../components/List";

function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Featured />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
}

export default Home;
