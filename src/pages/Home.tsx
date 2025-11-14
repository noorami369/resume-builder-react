import React from "react";
import AiAlert from "../components/AiAlert";
import HeaderLand from "../components/HeaderLand";
import BuildYourResume from "../components/BuildYourResume";
import DontTakeOurWord from "../components/DontTakeOurWord";

const Home = () => {
  return (
    <div className="flex flex-col">
      <AiAlert />
      <HeaderLand />
      <BuildYourResume />
      <DontTakeOurWord />
    </div>
  );
};

export default Home;
