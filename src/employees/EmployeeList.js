import React, { useState, useEffect } from 'react';
//import the components we will need
import { EmployeeCard } from './Employees.js';
import { deleteEmployees, getAllEmployees, getEmployeeById } from '../modules/EmployeeManager.js';
import { useHistory } from 'react-router';

export const EmployeeList = () => {
  // The initial state is an empty array
  const [employees, setEmployees] = useState([]);
  const history = useHistory();

  const getEmployees = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return getAllEmployees().then(employeesFromAPI => {
      setEmployees(employeesFromAPI)
    });
  };

  const handleDeleteEmployees = id => {
    deleteEmployees(id)
      .then(() => getAllEmployees().then(setEmployees))
  }

  // got the animals from the API on the component's first render
  useEffect(() => {
    getEmployees();
  }, []);

  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return (
    <div className="container-cards">
      <section className="section-content">
        <button type="button"
          className="btn"
          onClick={() => { history.push("/employees/create") }}>
          Admit Employee
        </button>
      </section>
      {employees.map(employee => <EmployeeCard key={employee.id} employee={employee} handleDeleteEmployees={handleDeleteEmployees} />)}
    </div>
  );
};