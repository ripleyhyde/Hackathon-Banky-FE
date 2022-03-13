import "./Navbar.css";
import { observer } from "mobx-react";
import red from "../../assets/red.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const NavBar = () => {
  const [mobile, setMobile] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={red} alt="Logo" className="logo" />
      </Link>

      <ul
        className={mobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setMobile(false)}
      >
        <Link to="/dashBoard" className="dashboard">
          <li>DashBoard</li>
        </Link>
        <Link to="/accounts" className="accounts">
          <li> Accounts</li>
        </Link>
        <Link to="/beneficiaries/all" className="beneficiaries">
          <li>Beneficiaries</li>
        </Link>
        <Link to="/contactus" className="contactus">
          <li>ContactUs</li>
        </Link>
        <Link to="/about" className="about">
          <li>About</li>
        </Link>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)}>
        {mobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
};

export default observer(NavBar);
