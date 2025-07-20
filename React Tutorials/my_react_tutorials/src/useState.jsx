// We initialize our state by calling useState in our function component.

// useState accepts an initial state and returns two values:
// The current state.
// A function that updates the state.

import { useState } from "react";
import React from "react";

function FavoriteColor1() {

    const [color , setColor] = useState("Blue") ;

    return <h1>My favorite color is {color}</h1>
}

export default FavoriteColor1;