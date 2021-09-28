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
import { useState } from "react/cjs/react.development"
import { Register } from "./auth/Register"
import { Login } from "./auth/Login"
import { Redirect } from "react-router"

export const ApplicationViews = ({isAdmin}) => {

  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("kennel_customer") !== null);

  const setAuthUser = (user) => {
    sessionStorage.setItem("kennel_customer", JSON.stringify(user))
    setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
  }


  return (
    <>

      <Route exact path="/">
        <Home isAdmin={isAdmin}/>
      </Route>

      {/* Authentication section */}
      <Route exact path="/animals">
        {isAuthenticated ? <AnimalList /> : <Redirect to="/login" />}
      </Route>

      <Route exact path="/locations">
        {isAuthenticated ? <LocationList /> : <Redirect to="/login" />}
      </Route>

      <Route exact path="/customers">
        {isAuthenticated ? <CustomerList /> : <Redirect to="/login" />}
      </Route>

      <Route exact path="/employees">
        {isAuthenticated ? <EmployeeList /> : <Redirect to="/login" />}
      </Route>

      {/* Details/Edit section */}
      <Route exact path="/animals/:animalId(\d+)">
        <AnimalDetail />
      </Route>


      <Route path="/locations/:locationId(\d+)">
        <LocationDetail />
      </Route>

      {/* Create section */}
      <Route path="/animals/create">
        <AnimalForm />
      </Route>

      <Route path="/locations/create">
        <LocationForm />
      </Route>

      <Route path="/employees/create">
        <EmployeeForm />
      </Route>

      <Route path="/customers/create">
        <CustomerForm />
      </Route>

      {/* Login and Register section */}
      <Route path="/login">
        <Login setAuthUser={setAuthUser} />
      </Route>

      <Route path="/register" >
        <Register setAuthUser={setAuthUser} />
      </Route>
    </>
  )
}