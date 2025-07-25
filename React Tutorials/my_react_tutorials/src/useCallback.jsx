import React , {useCallback, useState} from "react" ;

function App() {
    const [count , setCount] = useState(0) ;

    const handleClick = useCallback(() => {
        console.log("Clicked from child!");
    } , []) ;

    return (
        <>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment Count</button> 
        <ChildComponent onClick={handleClick} />       
        </>
    ) ;
}

const ChildComponent = React.memo(({ onClick }) =>{
    console.log("Child rendered") ;
    return <button onClick={onClick}>Child Button</button>
});