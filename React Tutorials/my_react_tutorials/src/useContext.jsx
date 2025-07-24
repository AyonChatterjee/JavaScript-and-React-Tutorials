import React from "react";

function App1() {
    const user = "Ayon" ;
    return <Parent user = {user} />
}

function Parent({user}) {
    return <Child user = {user} />
}

function Child({user}) {
    return <Grandchild user = {user} />
}

function Grandchild({user}) {
    return <h3>Hello {user}!</h3>
}

export default App1;