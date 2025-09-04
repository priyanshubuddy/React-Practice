import React, { useState } from "react";
import "./index.css";

function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() == "") {
      return
    }

    setCustomers([...customers, input]);
    setInput("");
  }


  return (
    <div className="mt-75 layout-column justify-content-center align-items-center">
      <section className="layout-row align-items-center justify-content-center">
        <input type="text" className="large" placeholder="Name" data-testid="app-input" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit" className="ml-30" data-testid="submit-button" onClick={handleAdd}>Add Customer</button>
      </section>

      {customers.length > 0 &&
        <ul className="styled mt-50" data-testid="customer-list">
          {customers?.map((customer, index) => (
            <li className="slide-up-fade-in" data-testid={"list-item" + (index)} key={"list-item" + (index)} >{customer}</li>
          )
          )}
        </ul>
      }
    </div>
  );
}

export default CustomerList