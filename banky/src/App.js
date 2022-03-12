import "./App.css";
import Cards from "./Components/Cards";
import About from "./Components/About";
import UserForm from "./Components/UserForm";
import Accounts from "./Components/Accounts";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import accountStore from "./stores/accountStore";
import AccountList from "./Components/AccountList";
import Content from "./Components/Account/Content";
import CreateAccount from "./Components/CreateAccount";
import DashBoard from "./Components/DashBoard/DashBoard";
import ContactUs from "./Components/Contactus/ContactUs";
import BeneficiaryList from "./Components/BeneficiaryList";
import BeneficiaryForm from "./Components/BeneficiaryForm";
// import BeneficiaryItem from "./Components/BeneficiaryItem";

function App() {
  return (
    <div>
      <h1>BANQUE PIVET</h1>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/content" element={<Content />} />
          <Route path="/dashBoard" element={<DashBoard />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/beneficiaries/all" element={<BeneficiaryList />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/accountlist"
            element={<AccountList accountList={accountStore.account} />}
          />
          <Route path="/accounts/create" element={<CreateAccount />} />
          <Route path="/beneficiaryForm" element={<BeneficiaryForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
