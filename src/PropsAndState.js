import React, {useState} from "react";
import "./components/PropsAndStates.css"
import { CurrentDate } from "./helpers/CurrentDate";
import { Quote } from "./helpers/Quote";

export const PropsAndState = ({yourName}) => {

    let [countClicks, setCountClicks] = useState(0);

    const handleClick = () => {
        const newCountClicks = ++countClicks;
        setCountClicks(newCountClicks);
    }

    const resetClick = () => {
        setCountClicks(0)
    }


    return (
        <> 
            <CurrentDate />
            <h3>Welcome, {yourName}</h3>
            <p>{countClicks}</p>
            <button onClick={(handleClick)}>Click Here</button>
            <button onClick={(resetClick)}>Reset</button>

            <Quote />
        </>
    )
}