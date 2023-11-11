import React, { useState } from "react";
import { BsSearch, BsFillTruckFrontFill } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";

const SearchBar = () => {
  let today = new Date().toISOString().slice(0, 10);
  let date = new Date();
  date.setDate(date.getDate() + 6);
  let dropDate = date.toISOString().slice(0, 10);

  const [toggleDLInput, setToggleDLInput] = useState(true);
  return (
    <div className="searchbarContainer-1">
      <div className="searchbarContainer-2">
        <div className="vehicleTypeBtns">
          <div style={{ backgroundColor: "#131313", color: "white" }}>
            <AiFillCar size={15} />
            <span>Cars</span>
          </div>
          <div>
            <BsFillTruckFrontFill size={15} />
            <span>Trucks</span>
          </div>
        </div>
        <div className="searchBar">
          <div className="locationFieldsContainer">
            <div className="locationField">
              <p>Pick-up Location</p>
              <div>
                <BsSearch size={20} />
                <input
                  type="text"
                  placeholder="Pick-up Location"
                  className="locationInput"
                />
              </div>
            </div>
            <div
              className="locationField"
              style={toggleDLInput ? { display: "none" } : { display: "block" }}
            >
              <p>Drop-off Location</p>
              <div>
                <BsSearch size={20} />
                <input
                  type="text"
                  placeholder="Drop-off Location"
                  className="locationInput"
                />
              </div>
            </div>
          </div>
          <div className="dateFieldsContainer">
            <div className="dateField">
              <p>Pick-up Date</p>
              <input
                type="datetime-local"
                defaultValue={`${today}T15:30`}
                className="dateInput"
              />
            </div>
            <div className="dateField">
              <p>Drop-off Date</p>
              <input
                type="datetime-local"
                defaultValue={`${dropDate}T08:30`}
                className="dateInput"
              />
            </div>
          </div>
          <button className="showCarsBtn">Show Cars</button>
        </div>
        <div className="searchbarContainerFooter">
          <div className="toggleDrop">
            <input
              id="toggleDropCheckBox"
              type="checkbox"
              onClick={() => setToggleDLInput(!toggleDLInput)}
            />
            <label htmlFor="toggleDropCheckBox">
              Drop car off at different location
            </label>
          </div>
          <a href="#">Apply corporate rate</a>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
