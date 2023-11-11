import React, { useState } from "react";
import US from "country-flag-icons/react/1x1/US";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineCurrencyExchange, MdOutlineLanguage } from "react-icons/md";
import { BsJournalBookmarkFill } from "react-icons/bs";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <div className="navbarContainer">
      <h1 className="logo">GetGo</h1>
      <div className="navItems">
        <span>USD</span>
        <US className="usIcon" />
        <button>Manage booking</button>
        <div className="registerBox">
          <BiUserCircle size={25} color="white" />
          <p>
            <span>Login</span> | <span>Register</span>
          </p>
        </div>
      </div>
      <div onClick={() => setToggleNav(true)} className="toggleNav">
        <AiOutlineMenu size={30} color="white" />
      </div>
      <div
        className="navItemsMobile"
        style={toggleNav ? { left: "50%" } : { left: "-100%" }}
      >
        <div>
          <MdOutlineCurrencyExchange size={25} />
          <p>United States dollar</p>
        </div>
        <div>
          <MdOutlineLanguage size={25} />
          <p>English</p>
        </div>
        <div>
          <BsJournalBookmarkFill size={25} />
          <p>Manage booking</p>
        </div>
        <div className="registerBox-2">
          <button>Login</button>
          <button>Register</button>
        </div>
        <div className="closeIcon" onClick={() => setToggleNav(!toggleNav)}>
          <AiOutlineClose color="black" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
