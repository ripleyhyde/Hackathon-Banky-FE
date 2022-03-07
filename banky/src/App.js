import "./App.css";
import Cards from "./Components/Cards";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className="App">
      <Cards />
      <Routes>
        <Route path="/userprofile" element={<UserProfile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
