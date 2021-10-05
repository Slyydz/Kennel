import React, {useState, useEffect} from "react";
import { PropsAndState } from "./PropsAndState";
import { AnimalSpotlight } from "./components/animal/AnimalSpotlight.js";
import { getRandomById }  from "./modules/AnimalManager"

export const Home = () => {
    const [spotlightId, setSpotlightId] = useState(0);
  
    const refreshSpotlightAnimal = () => {
      getRandomById().then(setSpotlightId);
    };
  
    useEffect(() => {
      refreshSpotlightAnimal();
    }, []);
  
    return (
      <>
        <address>
          Visit Us at the Nashville North Location
          <br />
          500 Puppy Way
        </address>
        <h1>Animal Spotlight</h1>
        <button onClick={refreshSpotlightAnimal}>Randomize &#x27f3;</button>
        {
          spotlightId && <AnimalSpotlight animalId={spotlightId} />
        }
      </>
    );
  };