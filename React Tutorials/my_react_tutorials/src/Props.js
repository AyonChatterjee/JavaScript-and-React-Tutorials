import React from "react";

function Car1(props) {
    return <h2>I am a {props.brand}!</h2>
}

const brandName1 = "Tata"
const brandName2 = "Volvo"
const brandName3 = "Ford"

function ShowCarBrand() {
    return (
        <div>
        <Car1 brand = {brandName1} />
        <Car1 brand = {brandName2} />
        <Car1 brand = {brandName3} />
        </div>
    );
}

export default ShowCarBrand ;