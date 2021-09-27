import React from "react"
import { Route } from "react-router-dom"
import { Home } from "../Home"
import { AnimalList } from "../components/animal/AnimalList.js"
import { CustomerList } from "../customers/CustomerList"
import { EmployeeList } from "../employees/EmployeeList"
import { LocationList } from "../location/LocationList"

export const ApplicationViews = () => {
    return (
        <>
        
            <Route exact path="/">
                <Home />
            </Route>

            
            <Route exact path="/animals">
              <AnimalList />
            </Route>

            <Route exact path="/locations">
              <LocationList />
            </Route>

            <Route exact path="/customers">
              <CustomerList />
            </Route>

            <Route exact path="/employees">
              <EmployeeList />
            </Route>
        </>
    )
}