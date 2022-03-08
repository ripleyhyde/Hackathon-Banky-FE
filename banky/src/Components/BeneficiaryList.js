import React from "react";
import { Button } from "react-bootstrap";
import BeneficiaryItem from "./BeneficiaryItem";

const BeneficiaryList = () => {
  return (
    <div className="beneficiaryList">
      <Button className="buttonAddBeneficiary">+ Add Beneficiary</Button>
      <BeneficiaryItem />
      <BeneficiaryItem />
    </div>
  );
};

export default BeneficiaryList;
