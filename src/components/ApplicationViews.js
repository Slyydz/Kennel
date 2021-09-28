import React from "react"
import { Route } from "react-router-dom"
import { Home } from "../Home"
import { AnimalList } from "../components/animal/AnimalList.js"
import { AnimalDetail } from "./animal/AnimalDetail"
import { CustomerList } from "../customers/CustomerList"
import { EmployeeList } from "../employees/EmployeeList"
import { LocationList } from "../location/LocationList"
import { LocationDetail } from "../location/LocationDetail"
import { AnimalForm } from "./animal/AnimalForm"
import { LocationForm } from "../location/LocationForm"
import { EmployeeForm } from "../employees/EmployeeForm"
import { CustomerForm } from "../customers/CustomerForm"

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

      <Route path="/animals/create">
        <AnimalForm />
      </Route>

      <Route path="/locations/create">
        <LocationForm />
      </Route>

      <Route path="/employees/create">
        <EmployeeForm />
      </Route>

      <Route path ="/customers/create">
        <CustomerForm />
      </Route>
    </>
  )
}