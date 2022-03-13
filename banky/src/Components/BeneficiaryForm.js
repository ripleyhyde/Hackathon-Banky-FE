import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { observer } from "mobx-react";
import beneficiaryStore from "../stores/beneficiaryStore";

const BeneficiaryForm = () => {
  const [beneficiary, setBeneficiary] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    iban: "",
    beneficiaryAddress: "",
  });

  const handleChange = (e) => {
    setBeneficiary({ ...beneficiary, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(beneficiary);
    beneficiaryStore.createBeneficiary(beneficiary);
  };

  return (
    <Form onSubmit={{ handleSubmit }}>
      <Form.Group className="box2">
        <Form.Control
          type="text"
          value={beneficiary.firstName}
          onChange={handleChange}
          name="firstName"
          placeholder="First Name"
        />
      </Form.Group>

      <Form.Group className="box2">
        <Form.Control
          type="text"
          value={beneficiary.middleName}
          onChange={handleChange}
          name="middleName"
          placeholder="Middle Name"
        />
      </Form.Group>

      <Form.Group className="box2">
        <Form.Control
          type="text"
          value={beneficiary.lastName}
          onChange={handleChange}
          name="lastName"
          placeholder="Last Name"
        />
      </Form.Group>

      <Form.Group className="box2">
        <Form.Control
          type="text"
          value={beneficiary.iban}
          onChange={handleChange}
          name="iban"
          placeholder="IBAN"
        />
      </Form.Group>

      <Form.Group className="box2">
        <Form.Control
          type="text"
          value={beneficiary.beneficiaryAddress}
          onChange={handleChange}
          name="beneficiaryAddress"
          placeholder="Address"
        />
      </Form.Group>

      <button variant="primary" onClick={handleSubmit} className="button">
        Submit
      </button>
    </Form>
  );
};

export default observer(BeneficiaryForm);
