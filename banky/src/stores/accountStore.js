import { makeAutoObservable } from "mobx";
import api from "./api";

class AccountStore {
  account = [];
  loading = true;
  constructor() {
    makeAutoObservable(this, {});
  }
  fetchAccount = async () => {
    try {
      const response = await api.get("/api/account");
      this.account = response.data;
      console.log(
        "🚀 ~ file: accountStore.js ~ line 14 ~ accountStore ~ fetchAccount= ~ this.accounts",
        this.account
      );
      this.loading = false;
    } catch (e) {
      console.log(e);
    }
  };
  createAccount = async (newAccount) => {
    console.log(
      "🚀 ~ file: accountStore.js ~ line 18 ~ accountStore ~ createaccount= ~ newaccount",
      newAccount
    );
    try {
      const formData = new FormData();
      for (const key in newAccount) {
        formData.append(key, newAccount[key]);
        console.log(
          "🚀 ~ file: accountStore.js ~ line 22 ~ accountStore ~ createaccount= ~ newaccount[key]",
          newAccount[key]
        );
      }

      const response = await api.post(`/api/account`, newAccount);

      this.account.push(response.data);
    } catch (e) {
      alert("cannot create new account");
      console.log(e);
    }
    // to do : call BE to create a account
  };
}
const accountStore = new AccountStore();
accountStore.fetchAccount();

export default accountStore;
