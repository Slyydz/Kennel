import React, { useState, useEffect } from 'react';
//import the components we will need
import { CustomerCard } from './Customer.js';
import { deleteCustomer, getAllCustomers, getCustomerById } from '../modules/CustomerManager.js';
import { deleteAnimal, getAllAnimals } from '../modules/AnimalManager.js';
import { useHistory } from 'react-router';

export const CustomerList = () => {
  // The initial state is an empty array
  const [customers, setCustomers] = useState([]);
  const history = useHistory();

  const getCustomers = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return getAllCustomers().then(customersFromAPI => {
      setCustomers(customersFromAPI)
    });
  };

  const handleDeleteCustomer = id => {
    deleteCustomer(id)
      .then(() => getAllCustomers().then(setCustomers))
  }

  // got the animals from the API on the component's first render
  useEffect(() => {
    getCustomers();
  }, []);

  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return (
    <div className="container-cards">
      <section className="section-content">
        <button type="button"
          className="btn"
          onClick={() => { history.push("/customers/create") }}>
          Admit Customer
        </button>
      </section>
      {customers.map(customer => <CustomerCard key={customer.id} customer={customer} handleDeleteCustomer={handleDeleteCustomer} />)}
    </div>
  );
};