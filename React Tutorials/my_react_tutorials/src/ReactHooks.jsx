import React , {useState} from "react";

function FavoriteColor() {
    const [color , setColor] = useState("Red") ;

    return (
        <>
        <h1>My favorite color is {color}!</h1>

        <button 
        type="button"
        onClick={() => setColor("Blue")}>Blue</button>
        
        <button type = "button"
        onClick={() => setColor("Red")}>Red</button>
        

        <button type="button"
        onClick={() => setColor("Orange")}>Orange</button>

        <button type="button"
        onClick={() => setColor("Pink")}>Pink</button>
        </>
    ) ;
}

export default FavoriteColor ;