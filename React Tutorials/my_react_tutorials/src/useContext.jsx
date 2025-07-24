import React , {createContext , useContext} from "react";

const UserContext = createContext() ;

function App1() {
    const user = "Ayon" ;
    return (
        <UserContext.Provider value={user}>
        <Parent />
        </UserContext.Provider>
    )
}

function Parent() {
    return <Child />
}

function Child() {
    return <Grandchild />
}

function Grandchild() {

    const user = useContext(UserContext) ;
    return <h3>Hello ,{user}!</h3>
}

export default App1;