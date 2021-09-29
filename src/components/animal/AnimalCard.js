import React from "react";
import "./Animal.css"
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export const AnimalCard = ({ animal, handleDeleteAnimal }) => {
  const history = useHistory();
  console.log(require('../../image/doggo.png'))
  return (
    <div className="card">
      <div className="card-content">
        { <picture>
            <img src={require('../../image/doggo.png').default} alt="My Dog" />
          </picture> }
        <h3>Name: <span className="card-petname">
          {animal.name}
        </span></h3>
        <p>Breed: {animal.breed}</p>
        <Link to={`/animals/details/${animal.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
}