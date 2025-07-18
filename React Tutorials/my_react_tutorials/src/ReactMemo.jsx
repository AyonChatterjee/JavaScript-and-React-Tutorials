import React from "react";

function Child({name}) {
    console.log("Child rendered") ;
    return <h2>Hello {name}</h2>
}

function Parent() {
    const [count , setCount] = React.useState(0) ;

    return (
        <>
        <Child name= "Ayon" />
        <button onClick={() => setCount(count + 1)}>Click the button</button>
       
        </>
    ) ;
}

export default Parent ;