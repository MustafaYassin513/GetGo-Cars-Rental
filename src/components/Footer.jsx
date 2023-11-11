import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footerContainer-1">
      <div className="footerContainer-2">
        <div className="footerHead">
          <h1>GetGo</h1>
          <div>
            <span>Follow Us</span>
            <FaDribbbleSquare size={30} />
            <FaFacebookSquare size={30} />
            <FaGithubSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
          </div>
        </div>
        <div className="footerBody">
          <div className="footerCol">
            <h6>Rent A Car</h6>
            <ul>
              <li>Istanbul Car Rental</li>
              <li>Ankara Car Rental</li>
              <li>Izmir Car Rental</li>
              <li>Antalya Car Rental</li>
            </ul>
          </div>
          <div className="footerCol">
            <h6>Loan</h6>
            <ul>
              <li>Consumer Loan</li>
              <li>Housing Loan</li>
              <li>Car Loan</li>
              <li>Credit card</li>
              <li>Deposit</li>
            </ul>
          </div>
          <div className="footerCol">
            <h6>GetGo Corporate</h6>
            <ul>
              <li>Analytics</li>
              <li>Marketing</li>
              <li>Commerce</li>
              <li>Insights</li>
            </ul>
          </div>
          <div className="footerCol">
            <h6>Insurance</h6>
            <ul>
              <li>Pricing</li>
              <li>Documentation</li>
              <li>Guides</li>
              <li>Insurance Companies</li>
            </ul>
          </div>
          <div className="footerCol">
            <h6>Company</h6>
            <ul>
              <li>About</li>
              <li>Blog</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="footerCol">
            <h6>Legal</h6>
            <ul>
              <li>Claim</li>
              <li>Policy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
