import React from "react";
import HomeAboutUs from "./HomeAboutUs";
import HomeContact from "./HomeContact";
import HomeHeader from "./HomeHeader";
import HomeSteps from "./HomeSteps";
import HomeThreeColumn from "./HomeThreeColumn";
import WhoWeHelp from "./WhoWeHelp";

function Home() {
  return (
    <>
      <HomeHeader />
      <HomeThreeColumn />
      <HomeSteps />
      <HomeAboutUs />
      <WhoWeHelp />
      <HomeContact />
    </>
  );
}

export default Home;
