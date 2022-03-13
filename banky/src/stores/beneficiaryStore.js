import api from "./api";
import { makeAutoObservable } from "mobx";

class BeneficiaryStore {
  beneficiaries = [];
  loading = true;
  constructor() {
    makeAutoObservable(this, {});
  }

  fetchBeneficiary = async () => {
    try {
      const response = await api.get("/beneficiaries/all");

      this.beneficiaries = response.data;

      this.loading = false;
    } catch (error) {}
  };

  createBeneficiary = async (newBeneficiary) => {
    try {
      const response = await api.post("/beneficiaries/create", newBeneficiary);
      this.beneficiaries = [...this.beneficiaries, response.data];
    } catch (error) {
      console.log("Invalid Beneficiary");
    }
  };
}

const beneficiaryStore = new BeneficiaryStore();
beneficiaryStore.fetchBeneficiary();
export default beneficiaryStore;
