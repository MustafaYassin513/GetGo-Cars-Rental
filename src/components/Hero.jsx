import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="heroContainer-1">
      <div className="heroContainer-2">
        <Navbar />
        <div className="heroDescription">
          <h1>Car Rental – Search, Compare & Save</h1>
          <p>
            <span>Free cancellations on most bookings </span>|{" "}
            <span>60,000+ locations </span>|{" "}
            <span>Customer support in 40+ languages</span>
          </p>
        </div>
        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;
