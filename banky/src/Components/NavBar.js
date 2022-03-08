import React from "react";
import { NavLink } from "react-router-dom";
import UserForm from "./UserForm";
import { observer } from "mobx-react";
// import { useState } from "react";

const NavBar = () => {
  // const [query, setQuery] = useState("");

  return (
    <div>
      <NavLink to="/">
        <h3 className="logo">Banque Pivet</h3>
      </NavLink>
      <NavLink to="/accounts">
        <p>Account</p>
      </NavLink>
      <NavLink to="/beneficiaries">
        <p>Beneficiaries</p>
      </NavLink>
      <NavLink to="/contactus">
        <p>Contact Us</p>
      </NavLink>
      <NavLink to="/about">
        <p>About</p>
      </NavLink>
      <li>
        <UserForm />
      </li>
    </div>
  );
};

export default observer(NavBar);
