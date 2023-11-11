import React from "react";
import { carsBrands } from "../carsBrands";

const VehicleBrands = () => {
  return (
    <div className="vBrandsContainer-1">
      <div className="vBrandsContainer-2">
        <h3>Vehicles Brands</h3>
        {carsBrands.map((car) => {
          return (
            <div key={car.id} className="vBrandCard">
              <img src={car.path} alt="" />
              <span>{car.carName}</span>
            </div>
          );
        })}
      </div>
      <button>See All Vehicles Brands</button>
    </div>
  );
};

export default VehicleBrands;
