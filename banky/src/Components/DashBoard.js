import React, { useState } from "react";
import ReactDOM from "react-dom";

const DashBoard = () => {
  //   // State to store count value
  //   const [count, setCount] = useState(7);

  //   // Function to increment count by 1
  //   const incrementCount = () => {
  //     // Update state with incremented value
  //     setCount(count + 1);
  //   };
  return (
    <div className="app">
      <p>Quick Pay</p>
      <p>7</p>
      <div>
        <p>Transfers: 5</p>
        <p> Total Incoming: KD 6,000.00</p>
        <p>Transfers: 3</p>
        <p>Total Outgoing: KD 3,000.00</p>
      </div>
      <div>
        <p>Number of Beneficiaries: 5</p>
        <button>View Beneficiaries</button>
      </div>
      <div>
        <p>Total Accounts Balance: KD 10,500.00</p>
      </div>
    </div>
  );
};

// const rootElement = document.getElementById("root");
// ReactDOM.render(<DashBoard />, rootElement);
export default DashBoard;
