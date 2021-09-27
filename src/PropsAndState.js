import React, {useState} from "react";

export const PropsAndState = ({name}) => {
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
            <h3>Welcome, {name}</h3>
            <p>{countClicks}</p>
            <button onClick={(handleClick)}>Click Here</button>
            <button onClick={(resetClick)}>Reset</button>
        </>
    )
}