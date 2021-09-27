import React from "react";
import { AnimalCard } from "./animal/AnimalCard";
import { LocationCard } from "../location/Location";
import { EmployeeCard } from "../employees/Employees";
import { CustomerCard } from "../customers/Customer";
import "./Kennel.css"

export const Kennel = () => {

    return <>
                <h2>Nashville Kennels</h2>
                <small>Loving care when you're not there.</small>
                <address>
                    <div>Visit us at the Nashville North Location</div>
                    <div>500 Puppy Way</div>
                </address>

                <h2> 
                    Animals
                    <article className="animals">
                        <AnimalCard />
                        <AnimalCard />
                        <AnimalCard />
                    </article>
                </h2>

                <h2> 
                    Employees
                    <article className="employees">
                        <EmployeeCard />
                        <EmployeeCard />
                        <EmployeeCard />
                    </article>
                </h2>

                <h2> 
                    Locations
                    <article className="locations">
                        <LocationCard />
                        <LocationCard />
                    </article>
                </h2>

                <h2> 
                    Customer
                    <article className="customers">
                        <CustomerCard />
                        <CustomerCard />
                        <CustomerCard />
                        <CustomerCard />
                    </article>
                </h2>
            </>
}