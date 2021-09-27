import React from "react";
import { AnimalCard } from "./animal/AnimalCard";
import { LocationCard } from "../location/Location";
import { EmployeeCard } from "../employees/Employees";
import { CustomerCard } from "../customers/Customer";
import { PropsAndState } from "../PropsAndState";
import "./Kennel.css"

export const Kennel = () => {

    return <>
                <h2>Nashville Kennels</h2>
                <small>Loving care when you're not there.</small>
                <address>
                    <div>Visit us at the Nashville North Location</div>
                    <div>500 Puppy Way</div>
                </address>
                <PropsAndState name="Brady"></PropsAndState>
                <h2>Animals</h2>
                    <article className="animals">
                        <AnimalCard />
                        <AnimalCard />
                        <AnimalCard />
                    </article>

                
                <h2>Employees</h2>
                    <article className="employees">
                        <EmployeeCard />
                        <EmployeeCard />
                        <EmployeeCard />
                    </article>

                
                    <h2>Locations</h2>
                    <article className="locations">
                        <LocationCard />
                        <LocationCard />
                    </article>

                
                    <h2>Customers</h2>
                    <article className="customers">
                        <CustomerCard />
                        <CustomerCard />
                        <CustomerCard />
                        <CustomerCard />
                    </article>
            </>
}