import React, { useState } from "react";
import { Form } from "react-bootstrap";
import accountStore from "../stores/accountStore";
import { observer } from "mobx-react";
const CreateAccount = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [account, setAccount] = useState({
    accountType: "",
  });
  console.log("🚀 ~ file: Accounts.js ~ line 11 ~ Accounts ~ account", account);

  const handleChaneg = (event) => {
    setAccount({ ...account, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    accountStore.createAccount(account);
    setAccount({
      accountType: "",
    });
    setIsOpen(false);
  };
  return (
    <div>
      <div className="cas">Create Account </div>
      <Form onSubmit={handleSubmit}>
        <Form.Label className="at">Account Type</Form.Label>
        <select onChange={handleChaneg} className="box1">
          <option value="Checking Account">Checking Account</option>
          <option value="Saving Account">Saving Account</option>
          <option value="Overdraft Account">Overdraft Account</option>
        </select>
        <button type="submit" className="button">
          Submit
        </button>
        <Form.Control
          name="accountType"
          type="text"
          placeholder="Purpose of opening account"
        />
      </Form>
    </div>
  );
};

export default observer(CreateAccount);
