import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { getQuoteAPI } from "../modules/QuoteFetch";

export const Quote = () => {
    const [allQuotes, changeQuotes] = useState([]);
    const [singleQuote, changeSingle] = useState({});

    const getAQuote = () => {

        return getQuoteAPI().then( allQuotes => {
            //set allQuotes to the entire api
            changeQuotes(allQuotes);
            //set singleQuote to a random object from the array
            changeSingle(allQuotes[randomNum()]);
        })
    }



    const randomNum = () => {
        //function returns a random number that is inside the scope of allQuotes
        return Math.floor(Math.random() * allQuotes.length);
    }

    const newButton = () => {
        //when the newButton is called then changeSingle is used to get a new object from the entire api using quote
        changeSingle(allQuotes[randomNum()]);
    }

    useEffect(() => {
        //useEffect to call getQuote on initial startup
        getAQuote();
    }, []);

    return (
    <div className="quote-all">
        <div className="quote-text">
            <h4>Quote: {singleQuote.text}</h4>
        </div>
        <div className="quote-author">
            <h4>Author: {singleQuote.author}</h4>
        </div>
        <button className="button" onClick={(newButton)}>New Quote</button>
    </div>
    );
}