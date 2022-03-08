// import UserForm from "./components/UserForm";
import "./App.css";
import Cards from "./components/Cards";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Accounts from "./components/Accounts";
import Beneficiaries from "./components/Beneficiaries";
import ContactUs from "./components/ContactUs";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="beneficiaries" element={<Beneficiaries />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
