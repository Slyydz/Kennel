import React from "react"
import { Route } from "react-router-dom"
import { Home } from "../Home"
import { AnimalList } from "../components/animal/AnimalList.js"
import { AnimalDetail } from "./animal/AnimalDetail"
import { CustomerList } from "../customers/CustomerList"
import { EmployeeList } from "../employees/EmployeeList"
import { LocationList } from "../location/LocationList"
import { LocationDetail } from "../location/LocationDetail"

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

            <Route path="/animals/:animalId(\d+)">
              <AnimalDetail />
            </Route>

            <Route path="/locations/:locationId(\d+)">
              <LocationDetail />
            </Route>
        </>
    )
}