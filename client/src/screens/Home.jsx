import React from "react";
import Featured from "../components/Featured";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />
      <Featured type="series" />
    </div>
  );
}

export default Home;
