import React from "react";
import "./Customer.css";

export const CustomerCard = ({ customer, handleDeleteCustomer }) => {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture> */}
          <h3>Name: <span className="card-custName">
            {customer.name}
          </span></h3>
          <p>Address: {customer.address}</p>
          <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>Remove Customer</button>
        </div>
      </div>
    );
  }