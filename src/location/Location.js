import React from "react";
import { Link } from "react-router-dom";
import "./Location.css";

export const LocationCard = ({ location, handleDeleteLocation }) => {
  return (
    <div className="card">
      <div className="card-content">
        {/* <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture> */}
        <h3>Name: <span className="card-locationName">
          {location.name}
        </span></h3>
        <p>Address: {location.address}</p>
        <Link to={`/locations/${location.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
}