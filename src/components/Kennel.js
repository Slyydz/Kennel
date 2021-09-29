import React from "react";
import "./Kennel.css"
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";

const isAdmin = true;


export const Kennel = () => {

    return <>
            <NavBar />
            <ApplicationViews isAdmin={isAdmin}/>
           </>
}