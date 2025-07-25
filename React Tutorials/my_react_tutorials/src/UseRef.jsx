import { useState, useEffect, useRef } from "react";
import React from "react";


function Application() {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return (
        <>

            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value * 2)} />

            <h2>Current Value : {inputValue}</h2>
            <h2>Previous Value : {previousInputValue.current}</h2>

        </>
    );
}
export default Application;
