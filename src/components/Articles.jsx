import React from "react";
import { AiOutlineEye } from "react-icons/ai";

const Articles = () => {
  return (
    <div className="articlesContainer-1">
      <div className="articlesContainer-2">
        <p className="title">Recently Added Travel Articles</p>
        <div className="card">
          <div className="articleInfo">
            <img src={"assets/articles-images/bozcaada-35922.webp"} alt="" />
            <h3>Places to visit in Bozcaada</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
              dolores maiores perspiciatis labore dolorum eos nam architecto
              rerum voluptates asperiores est.
            </p>
          </div>
          <div className="cardFooter">
            <div className="writer">
              <img src={"assets/profile-user.jpg"} alt="" />
              <div>
                <p className="user">Mustafa yassin</p>
                <p className="date">October 17, 2023</p>
              </div>
            </div>
            <div className="views">
              <span>204</span>
              <AiOutlineEye />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="articleInfo">
            <img src={"assets/articles-images/bursa-52164.webp"} alt="" />
            <h3>Places to visit in Bursa</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
              dolores maiores perspiciatis labore dolorum eos nam architecto
              rerum voluptates asperiores est.
            </p>
          </div>
          <div className="cardFooter">
            <div className="writer">
              <img src={"assets/profile-user.jpg"} alt="" />
              <div>
                <p className="user">Mustafa yassin</p>
                <p className="date">October 17, 2023</p>
              </div>
            </div>
            <div className="views">
              <span>204</span>
              <AiOutlineEye />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="articleInfo">
            <img
              src={
                "assets/articles-images/uskup-te-gezilecek-yerler-52175.webp"
              }
              alt=""
            />
            <h3>Places to visit in Uskup</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
              dolores maiores perspiciatis labore dolorum eos nam architecto
              rerum voluptates asperiores est.
            </p>
          </div>
          <div className="cardFooter">
            <div className="writer">
              <img src={"assets/profile-user.jpg"} alt="" />
              <div>
                <p className="user">Mustafa yassin</p>
                <p className="date">October 17, 2023</p>
              </div>
            </div>
            <div className="views">
              <span>204</span>
              <AiOutlineEye />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
