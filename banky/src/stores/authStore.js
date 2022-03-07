import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import api from "./api";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this, {});
  }
  setUser = (token) => {
    localStorage.setItem("myToken", token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };
  checkForToken = () => {
    const token = localStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now();
      const user = decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.signOut();
      }
    }
  };
  logIn = async (user) => {
    try {
      const resp = await api.post("/login", user);
      this.setUser(resp.data.token);
      console.log(
        "🚀 ~ file: authStore.js ~ line 32 ~ AuthStore ~ logIn= ~ resp.data.token",
        resp.data.token
      );
    } catch (error) {
      console.log(
        "🚀 ~ file: authStore.js ~ line 33 ~ AuthStore ~ logIn= ~ error",
        error
      );
    }
  };

  signUp = async (user) => {
    try {
      const resp = await api.post("/signup", user);
      this.setUser(resp.data.token);
      console.log(
        "🚀 ~ file: authStore.js ~ line 42 ~ AuthStore ~ signUp= ~ resp.data.token",
        resp.data.token
      );
    } catch (error) {
      console.log(
        "🚀 ~ file: authStore.js ~ line 40 ~ AuthStore ~ signUp= ~ error",
        error
      );
    }
  };
  signOut = () => {
    delete api.defaults.headers.common.Authorization;
    localStorage.removeItem("myToken");
    this.user = null;
  };
}

const authstore = new AuthStore();
authstore.checkForToken();
export default authstore;
