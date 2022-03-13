import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

const AccountItem = ({ account }) => {
  return (
    <div>
      <Link to={`account/${account.slug}`}>
        <h3>{account.accountType}</h3>
        <h3>{account.owner?.username}</h3>
      </Link>
    </div>
  );
};

export default observer(AccountItem);
