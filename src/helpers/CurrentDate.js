import React from "react";

 //Date
 export const CurrentDate = () => {
    const dateObj = new Date(Date.now());
    const date = dateObj.toLocaleDateString();

    return <h4 class="date">Todays Date: {date}</h4>

}