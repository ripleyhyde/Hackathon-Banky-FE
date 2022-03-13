import React from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const Accounts = () => {
  return (
    <div>
<<<<<<< HEAD
<<<<<<< Updated upstream
      {" "}
=======
      <Link to={`/createaccount`}>create A ccount </Link>
>>>>>>> Stashed changes
=======
      <Link to={`/accounts/create/`} className="creat">
        Create Account
      </Link>
>>>>>>> 17365e390f830fee7e1d582369adb20b36c9fcdf
      <Cards />
    </div>
  );
};

export default Accounts;
