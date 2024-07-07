import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="contents">
          <div className="parts">
            <h3>Furniro.</h3>
            <pre>400 University Drive Suite 200 Coral</pre>
            <pre>Gables,</pre>
            <pre>FL 33134 USA</pre>
          </div>
          <div className="parts">
            <p>Links</p>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Shop">Shop</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
          </div>
          <div className="parts">
            <p>Help</p>
            <NavLink to="/">Payment Options</NavLink>
            <NavLink to="/">Returns</NavLink>
            <NavLink to="/">Privacy Policies</NavLink>
          </div>
          <div className="parts">
            <p>Newsletter</p>
            <div className="content">
              <input
                type="text"
                required
                placeholder="Enter Your Email Address"
              />
              <button type="submit">SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="end">2023 furino. All rights reverved</div>
      </div>
    </div>
  );
};

export default Footer;
