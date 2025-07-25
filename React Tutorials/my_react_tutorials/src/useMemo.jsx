import React, { useState, useMemo } from "react";

// The React useMemo Hook returns a memoized value.The useMemo Hook only runs when one of its dependencies update.

function ExpensiveComponent() {
    const [count, setCount] = useState(0);

    const expensiveValue = useMemo(() => {
        console.log("Calculating expensive value...");
        let result = 0;
        for (let i = 0; i < 1000000; i++) {
            result += i;
        }
        return result + count;
    }, [count]);


    return (
        <>
            <h2>useMemo Example</h2>
            <p>Count: {count}</p>
            <p>Expensive Value: {expensiveValue}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </>
    );
}

export default ExpensiveComponent;