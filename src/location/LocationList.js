import React, { useState, useEffect } from 'react';
//import the components we will need
import { LocationCard } from './Location.js';
import { deleteLocation, getAllLocations, getLocationById } from '../modules/LocationManager.js';
import { useHistory } from 'react-router';

export const LocationList = () => {
  // The initial state is an empty array
  const [locations, setLocations] = useState([]);
  const history = useHistory();

  const getLocations = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return getAllLocations().then(locationsFromAPI => {
      setLocations(locationsFromAPI)
    });
  };

  const handleDeleteLocation = id => {
    deleteLocation(id)
      .then(() => getAllLocations().then(setLocations))
  }

  // got the animals from the API on the component's first render
  useEffect(() => {
    getLocations();
  }, []);

  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return (
    <div className="container-cards">
      <section className="section-content">
        <button type="button"
          className="btn"
          onClick={() => { history.push("/locations/create") }}>
          Admit Location
        </button>
      </section>
      {locations.map(location => <LocationCard key={location.id} location={location} handleDeleteLocation={handleDeleteLocation} />)}
    </div>
  );
};