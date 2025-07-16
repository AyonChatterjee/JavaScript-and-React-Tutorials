import React from "react";

function Person(props) {
    return (
    <div>
    <h2>I am {props.information.name}!</h2>
    <h2>My age is {props.information.age}!</h2>
    <h2>I live in {props.information.place}!</h2>
    </div>
    );
}

function ShowPersonalDetails() {
    const info = {name : "Ayon Chatterjee"  , age : 23 , place : "Ranchi"}
    return (
        <div>
        <h1>My Personal Details</h1>
        <Person information = {info} />
        </div>
    );
}

export default ShowPersonalDetails ;