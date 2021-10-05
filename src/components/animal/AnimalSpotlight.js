import React, {useState , useEffect} from "react";
import { getAnimalById } from "../../modules/AnimalManager";
import "./AnimalSpotlight.css";
import { firstLetterCase } from "../../helpers/helpers";

export const AnimalSpotlight = ({animalId}) => {
    const [animal, setAnimal] = useState({name: "", breed: ""});

    useEffect(() => {
        getAnimalById(animalId).then(res => {
            setAnimal(res);
        })
    }, [animalId])

    return (
        <div className="animal-spotlight">
      <img src={require('../../image/doggo.png').default} alt="My Dog" />
      <div>
        <h3>{firstLetterCase(animal.name)}</h3>
        <p>{firstLetterCase(animal.breed)}</p>
      </div>
    </div>
    );
}