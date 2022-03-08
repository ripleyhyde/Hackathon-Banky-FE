import UserForm from "./Components/UserForm";
import "./App.css";
import Cards from "./Components/Cards";

function App() {
  return (
    <div>
      <h1>BANQUE PIVET</h1>

      <div className="App">
        {/* <Cards /> */}
        <UserForm />
      </div>
    </div>
  );
}

export default App;
