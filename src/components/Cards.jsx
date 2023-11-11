import React from "react";

const Cards = () => {
  return (
    <div className="cardsContainer-1">
      <div className="cardsContainer-2">
        <p className="title">
          You Have Many Reasons to Rent Your Car from GetGo
        </p>
        <div className="card">
          <img src={"assets/cards-icons/45000.png"} alt="" />
          <h3>Get the best deals</h3>
          <p>
            We list the most suitable vehicles for you in dozens of vehicles
            belonging to different rent a car companies.
          </p>
        </div>
        <div className="card">
          <img src={"assets/cards-icons/45002.png"} alt="" />
          <h3>Filter the tools that match your preferences</h3>
          <p>
            We offer extensive filtering options for you to find the vehicle
            that suits your preferences.
          </p>
        </div>
        <div className="card">
          <img src={"assets/cards-icons/45003.png"} alt="" />
          <h3>Do all your transactions through GetGo</h3>
          <p>
            We enable you to easily make your transactions without directing you
            to other sites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
