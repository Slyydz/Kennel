import React from "react";
import "./Employees.css";

export const EmployeeCard = ({ employee, handleDeleteEmployees }) => {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture> */}
          <h3>Name: <span className="card-empName">
            {employee.name}
          </span></h3>
          <p>Store: {employee.locationName}</p>
          <button type="button" onClick={() => handleDeleteEmployees(employee.id)}>Remove Employee</button>
        </div>
      </div>
    );
  }