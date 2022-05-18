import React from "react";
import Footer from "./Footer";
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
      <Footer />
    </>
  );
}

export default Home;
