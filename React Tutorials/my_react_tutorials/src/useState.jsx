// We initialize our state by calling useState in our function component.

// useState accepts an initial state and returns two values:
// The current state.
// A function that updates the state.

import { useState } from "react";
import React from "react";


function Car() {
    const [car , setCar] = useState({
        brand:"Ford" ,
        model:"Mustang" ,
        year:"1964" ,
        color:"Red"
    });

    const updateColor = () => {
        setCar(previousState => {
            return {...previousState , color:"blue"}
        }) ;
    }
    
    
   return(
    <>
    <h1>I have a {car.brand} car of model {car.model} which was launched in {car.year} and has a color {car.color}.</h1>    
    <button 
    type="button"
    onClick={updateColor}>Blue</button>
    </>
   )
}



export default Car;