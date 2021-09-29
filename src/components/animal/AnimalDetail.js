import React, { useState, useEffect } from 'react';
import { getAnimalById, deleteAnimal} from '../../modules/AnimalManager';
import './AnimalDetail.css';
import { useParams, useHistory } from "react-router-dom"

export const AnimalDetail = () => {
    const [animal, setAnimal] = useState({name: "", breed: ""});
    const [isLoading, setisLoading] = useState(true)

    const {animalId} = useParams();
    const history = useHistory();

    useEffect(() => {
        //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
        console.log("useEffect", animalId)
        getAnimalById(animalId)
          .then(animal => {
            console.log(animal.customer.name)
            setAnimal({
              name: animal.name,
              breed: animal.breed,
              location: animal.location,
              customer: animal.customer
            });
            setisLoading(false)
          });
      }, [animalId]);

      const handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        setisLoading(true);
        deleteAnimal(animalId).then(() =>
          history.push("/animals")
        );
      };

      return (
        <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">{animal.breed}</div>
        
        <div className="animal__location">Location: {animal.location?.name}</div>
        <div className="animal__owner">Customer: {animal.customer?.name}</div>

        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
        </section>
      )
}