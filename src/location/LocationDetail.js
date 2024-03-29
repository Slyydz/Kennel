import React, { useState, useEffect } from 'react';
import { getLocationById, deleteLocation } from '../modules/LocationManager.js';
import './LocationDetail.css';
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
  const [location, setLocation] = useState({ name: "", address: "" });
  const [isLoading, setIsLoading] = useState(true);

  const { locationId } = useParams();
  const history = useHistory();

  useEffect(() => {
    //getlocationById(id) from locationManager and hang on to the data; put it into state
    console.log("useEffect", locationId)
    getLocationById(locationId)
      .then(location => {
        setLocation({
          name: location.name,
          breed: location.address
        });
        setIsLoading(false);
      });
  }, [locationId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    deleteLocation(locationId).then(() =>
      history.push("/locations")
    );
  };

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__breed">{location.breed}</div>

      <button type="button" disabled={isLoading} onClick={handleDelete}>
        Close Location
      </button>
    </section>
  );
}