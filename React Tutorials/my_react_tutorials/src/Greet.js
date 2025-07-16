import React from "react";

function Greet() {
    return <h2>Greeting from function components</h2>
}

function Car() {
    return <h3>I am a car!</h3>
}

function CarColor() {
    return (
    <div>
    <h1>My car color is Radient Red.</h1>
    <Car />
    </div>
    ) ;
}
export { Greet , CarColor} ;