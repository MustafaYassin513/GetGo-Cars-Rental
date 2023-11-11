import React from "react";
import { useState } from "react";

const CarsFleet = () => {
  const [selectedCar, setSelectedCar] = useState(car1);
  const toggleSelected = (
    id,
    img,
    model,
    doors,
    fuel,
    transmission,
    mark,
    ac,
    year,
    price
  ) => {
    setSelectedCar({
      id,
      img,
      model,
      doors,
      fuel,
      transmission,
      mark,
      ac,
      year,
      price,
    });
  };
  return (
    <div className="carsFleetContainer-1">
      <h3>Vehicle Models</h3>
      <h1>Our Rental Fleet</h1>
      <p className="description">
        Choose from a variety of our amazing vehicles to rent for your next
        adventure or business trip
      </p>
      <div className="carsFleetContainer-2">
        <div className="carsList">
          {carsData.map((car) => (
            <p
              key={car.id}
              style={
                selectedCar.id == car.id
                  ? { backgroundColor: "rgb(255, 81, 7)", color: "white" }
                  : {}
              }
              onClick={() =>
                toggleSelected(
                  car.id,
                  car.img,
                  car.model,
                  car.doors,
                  car.fuel,
                  car.transmission,
                  car.mark,
                  car.ac,
                  car.year,
                  car.price
                )
              }
            >
              {car.carName}
            </p>
          ))}
        </div>
        <img src={selectedCar.img} alt="" />
        <div className="carDetailsContainer">
          <table className="carDetails">
            <tbody>
              <tr className="rentPrice">
                <td colSpan={2}>
                  <strong>{selectedCar.price}</strong> /rent per day
                </td>
              </tr>
              <tr>
                <td className="mainCol">Model</td>
                <td>{selectedCar.model}</td>
              </tr>
              <tr>
                <td className="mainCol">Mark</td>
                <td>{selectedCar.mark}</td>
              </tr>
              <tr>
                <td className="mainCol">Year</td>
                <td>{selectedCar.year}</td>
              </tr>
              <tr>
                <td className="mainCol">Doors</td>
                <td>{selectedCar.doors}</td>
              </tr>
              <tr>
                <td className="mainCol">AC</td>
                <td>{selectedCar.ac}</td>
              </tr>
              <tr>
                <td className="mainCol">Transmission</td>
                <td>{selectedCar.transmission}</td>
              </tr>
              <tr>
                <td className="mainCol">Fuel</td>
                <td>{selectedCar.fuel}</td>
              </tr>
            </tbody>
          </table>
          <button className="reserveBtn">RESERVE NOW</button>
        </div>
      </div>
    </div>
  );
};

export default CarsFleet;

const car1 = {
  id: 1234,
  carName: "Audi A1 S-Line",
  img: "assets/cars-fleet/audia1.png",
  model: "A1 S-Line",
  mark: "Audi",
  year: "2015",
  doors: "4/5",
  ac: "Yes",
  transmission: "Automatic",
  fuel: "Diesel",
  price: "35$",
};
const carsData = [
  car1,
  {
    id: Math.random(),
    carName: "VW Golf 6",
    img: "assets/cars-fleet/vwgolf.png",
    model: "Golf 6",
    mark: "Volkswagen",
    year: "2012",
    doors: "4/5",
    ac: "Yes",
    transmission: "Manual",
    fuel: "Diesel",
    price: "30$",
  },
  {
    id: Math.random(),
    carName: "Toyota Camry",
    img: "assets/cars-fleet/camry.png",
    model: "Camry",
    mark: "Toyota",
    year: "2021",
    doors: "4/5",
    ac: "Yes",
    transmission: "Automatic",
    fuel: "Diesel",
    price: "40$",
  },
  {
    id: Math.random(),
    carName: "BMW 320 ModernLine",
    img: "assets/cars-fleet/bmw320.png",
    model: "320 ML",
    mark: "BMW",
    year: "2017",
    doors: "4/5",
    ac: "Yes",
    transmission: "Manual",
    fuel: "Diesel",
    price: "35$",
  },
  {
    id: Math.random(),
    carName: "Mercedes-Benz GLK",
    img: "assets/cars-fleet/mercedes.png",
    model: "Benz GLK",
    mark: "Mercedes",
    year: "2015",
    doors: "4/5",
    ac: "Yes",
    transmission: "Manual",
    fuel: "Diesel",
    price: "45$",
  },
  {
    id: Math.random(),
    carName: "VW Passat SE",
    img: "assets/cars-fleet/vwpassatse.png",
    model: "Passat SE",
    mark: "Volkswagen",
    year: "2018",
    doors: "4/5",
    ac: "Yes",
    transmission: "Automatic",
    fuel: "Diesel",
    price: "38$",
  },
];
