import UserForm from "./Components/UserForm";
import "./App.css";
import Cards from "./Components/Cards";
import Content from "./Components/Account/Content";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>BANQUE PIVET</h1>

      <div className="App">
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/content" element={<Content />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
