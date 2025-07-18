import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";


function Myform() {
    const [name , setName] = useState("") ;

    const handleSubmit = (event) => {
        event.preventDefault() ;
        alert(`The name you entered was :${name}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                type ="text"
                value={name}
                onChange={(e) => setName(e.target.value)} />
            </label>
            <input type="submit" />
        </form>
    );
}

export default Myform;