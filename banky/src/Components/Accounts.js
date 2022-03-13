import React from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import CreateAccount from "./CreateAccount";

const Accounts = () => {
  return (
    <div>
<<<<<<< Updated upstream
      {" "}
=======
      <Link to={`/createaccount`}>create A ccount </Link>
>>>>>>> Stashed changes
      <Cards />
    </div>
  );
};

export default Accounts;
