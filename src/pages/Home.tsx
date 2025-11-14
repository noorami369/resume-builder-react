import React from "react";
import AiAlert from "../components/AiAlert";
import HeaderLand from "../components/HeaderLand";
import BuildYourResume from "../components/BuildYourResume";
import DontTakeOurWord from "../components/DontTakeOurWord";
import BuildProfessionalResume from "../components/BuildProfessionalResume";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col">
      <AiAlert />
      <HeaderLand />
      <BuildYourResume />
      <DontTakeOurWord />
      <BuildProfessionalResume />
      <Footer />
    </div>
  );
};

export default Home;
