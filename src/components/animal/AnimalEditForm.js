import React, { useState, useEffect } from "react"
import { getAllLocations } from "../../modules/LocationManager"
import { getAllCustomers } from "../../modules/CustomerManager"
import { update, getAnimalById } from "../../modules/AnimalManager"
import "./AnimalForm.css"
import { useParams, useHistory } from "react-router-dom"

export const AnimalEditForm = () => {
    const [animal, setAnimal] = useState({ name: "", breed: "", location: "", customer: ""});
    const [isLoading, setIsLoading] = useState(false);

    const { animalId } = useParams();
    const history = useHistory();

    const [locations, setLocations] = useState([]);

	const [customers, setCustomers] = useState([]);

    const handleFieldChange = evt => {
        const stateToChange = { ...animal };
        stateToChange[evt.target.id] = evt.target.value;
        setAnimal(stateToChange);
    };

    const updateExistingAnimal = evt => {
        evt.preventDefault()
        setIsLoading(true);

        // This is an edit, so we need the id
        const editedAnimal = {
            id: animalId,
            name: animal.name,
            breed: animal.breed,
            location: animal.location,
            customer: animal.customer
        };

        update(editedAnimal)
            .then(() => history.push("/animals")
            )
    }

    useEffect(() => {
        getAnimalById(animalId)
            .then(animal => {
                setAnimal(animal);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
		//load location data and setState
		getAllLocations().then(loc => {
			setLocations(loc)
		})
	}, []);

     useEffect(() => {
		//load customer data and setState
		getAllCustomers().then(cus => {
			setCustomers(cus)
		})
	}, []);

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="name"
                            value={animal.name}
                        />
                        <label htmlFor="name">Animal name</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="breed"
                            value={animal.breed}
                        />
                        <label htmlFor="breed">Breed</label>
                    </div>
                    <div className="alignRight">
                    <fieldset>
				<div className="form-group">
					<label htmlFor="location">Assign to location: </label>
					<select value={animal.location?.id} name="locationId" onChange={handleFieldChange} id="locationId" className="form-control" >
						<option value="0">Select a location</option>
						{locations.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="customerId">Customer: </label>
					<select value={animal.customer?.id} name="customer" onChange={handleFieldChange} id="customerId" className="form-control" >
						<option value="0">Select a customer</option>
						{customers.map(c => (
							<option key={c.id} value={c.id}>
								{c.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingAnimal}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}



