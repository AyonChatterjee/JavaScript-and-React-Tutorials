import React from "react";

// Putting the shoot function inside functional component Football.

function Football() {
   const shoot =  (a) => {
        alert(a)
    }

    return(
        <button onClick={() => shoot("Goal!")}>Take the Shot!</button>
    );
}

function ClickButton() {
     const clicked = () => {
        alert("I have Clicked the button.")
     }

     return (
        <button onClick={clicked}>Click the button.</button>
     )
}
export  {Football , ClickButton} ;