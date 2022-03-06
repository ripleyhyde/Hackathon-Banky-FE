import { Route, Routes } from "react-router-dom";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <dic>
      <Routes>
        <Route path="/userprofile" element={<UserProfile />}></Route>
      </Routes>
    </dic>
  );
}

export default App;
