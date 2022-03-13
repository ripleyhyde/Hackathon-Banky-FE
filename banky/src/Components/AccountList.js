import React from "react";
import AccountItem from "./AccountItem";
import accountStore from "../stores/accountStore";

const AccountList = () => {
  const accountList = accountStore.account.map((account) => {
    return <AccountItem account={account} key={account._id} />;
  });
  return (
    <div>
      <button>Create Account</button>
      {accountList}
    </div>
  );
};

export default AccountList;
