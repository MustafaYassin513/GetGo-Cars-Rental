import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const FaqBox = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (id) => {
    if (selected == id) {
      return setSelected(null);
    }
    setSelected(id);
  };
  return (
    <div className="faqBoxContainer-1">
      <div className="faqBoxContainer-2">
        <h2>Frequently Asked Questions</h2>
        <div className="questionsContainer">
          {data.map((item) => {
            return (
              <div key={item.id}>
                <div className="question" onClick={() => toggle(item.id)}>
                  <p>{item.question}</p>
                  <MdOutlineKeyboardArrowDown
                    style={
                      item.id == selected
                        ? {
                            transform: "rotate(180deg)",
                            transition: "0.3s ease-in-out",
                          }
                        : {
                            transform: "none",
                            transition: "0.3s ease-in-out",
                          }
                    }
                    size={20}
                  />
                </div>
                <p className={item.id == selected ? "answer" : "active"}>
                  {item.answer}
                </p>
              </div>
            );
          })}
        </div>
        <button>See all</button>
      </div>
    </div>
  );
};

export default FaqBox;

const data = [
  {
    id: Math.random(),
    className: "",
    question: "How does GetGo offer the cheapest car rental options?",
    answer:
      "GetGo compares and lists the offers of different car rental companies according to the destination where you want to rent a car.The tools listed; You can choose to sort by increasing or decreasing according to price, by company or by recommended. You can find the most suitable vehicle for you by sorting according to your preferences with filters such as rental company, gear type, fuel type, and vehicle brand.",
  },
  {
    id: Math.random(),
    className: "",
    question:
      "How does GetGo ensure the security of my car rental transactions?",
    answer:
      "All of the transactions you make through GetGo are secured by an SSL certificate. In addition, when renting a car, 3D Security assurance is also offered for your transactions at the payment step.",
  },
  {
    id: Math.random(),
    className: "",
    question: "What brands of cars i can rent on GetGo?",
    answer:
      "You can rent vehicles of brands such as Audi, Mercedes Benz, Jeep, Citroen, Dacia, Fiat, Ford, Hyundai, Opel, Nissan, Renault, Peugeot and Volkswagen at GetGo.",
  },
  {
    id: Math.random(),
    className: "",
    question: "How can i rent a car in GetGo?",
    answer:
      "You can use our website to rent a car from GetGo. After entering the point where you want to pick up your rental car, the pick-up and drop-off dates, you can compare the offers of different car rental companies, choose the car that suits you and rent it safely.",
  },
];
