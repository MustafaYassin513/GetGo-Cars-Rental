import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import VehicleBrands from "../components/VehicleBrands";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
import FaqBox from "../components/FaqBox";
import CarsFleet from "../components/carsFleet";

const Home = () => {
  return (
    <div className="homePageContainer">
      <Hero />
      <CarsFleet />
      <Cards />
      <VehicleBrands />
      <Articles />
      <FaqBox />
      <Footer />
    </div>
  );
};

export default Home;
