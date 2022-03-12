import React from "react";
import { Link } from "react-router-dom";
import BeneficiaryItem from "./BeneficiaryItem";
import beneficiaryStore from "../stores/beneficiaryStore";

const BeneficiaryList = () => {
  const beneficiaryList = beneficiaryStore.beneficiaries.map((beneficiary) => {
    return <BeneficiaryItem beneficiary={beneficiary} key={beneficiary._id} />;
  });

  return (
    <div className="beneficiaryList">
      <Link to="/beneficiaryForm">
        <button className="button">+ Add Beneficiary</button>
      </Link>
      {beneficiaryList}
      {/* <BeneficiaryItem />
      <BeneficiaryItem />
      <BeneficiaryItem /> */}
    </div>
  );
};

export default BeneficiaryList;
