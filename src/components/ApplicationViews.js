import React from "react"
import { Route } from "react-router-dom"
import { Home } from "../Home"
import { AnimalCard } from "../components/animal/AnimalCard.js"
import { LocationCard } from "../location/Location.js"
import { CustomerCard } from "../customers/Customer.js"
import { EmployeeCard } from "../employees/Employees.js"

export const ApplicationViews = () => {
    return (
        <>
        
            <Route exact path="/">
                <Home />
            </Route>

            
            <Route exact path="/animals">
              <AnimalCard />
            </Route>

            <Route exact path="/locations">
              <LocationCard />
            </Route>

            <Route exact path="/customers">
              <CustomerCard />
            </Route>

            <Route exact path="/employees">
              <EmployeeCard />
            </Route>
        </>
    )
}