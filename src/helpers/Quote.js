import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { getQuote } from "../modules/QuoteFetch";

export const Quote = () => {
    const [quote, changeQuote] = useState([]);
    const [singleQuote, changeSingle] = useState({});

    const getAQuote = () => {

        return getQuote().then( taco => {
            changeQuote(taco);
            changeSingle(taco[randomNum()]);
        })
    }



    const randomNum = () => {
        return Math.floor(Math.random() * quote.length);
    }

    const newButton = () => {
        changeSingle(quote[randomNum()]);
    }

    useEffect(() => {
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