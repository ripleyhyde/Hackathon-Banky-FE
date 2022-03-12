import React from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const Accounts = () => {
  return (
    <div>
      <Link to={`/accounts/create/`} className="creat">
        Create Account
      </Link>
      <Cards />
    </div>
  );
};

export default Accounts;
