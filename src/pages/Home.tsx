import React from "react";
import AiAlert from "../components/AiAlert";
import HeaderLand from "../components/HeaderLand";
import BuildYourResume from "../components/BuildYourResume";

const Home = () => {
  return (
    <div className="flex flex-col">
      <AiAlert />
      <HeaderLand />
      <BuildYourResume />
    </div>
  );
};

export default Home;
