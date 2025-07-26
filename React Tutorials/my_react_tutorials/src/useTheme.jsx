// This is a custom Hook.It is just a JavaScript function whose name starts with use and can use other React hooks inside it (like useState, useEffect, etc.)
// You create a custom hook when you want to reuse some logic (like fetching data, form handling, toggling state, etc.) across multiple components without repeating code.

import { useState , useEffect } from "react";

function useTheme() {
    const [theme , setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light")) ;
    };


    useEffect(() => {
        document.body.className = theme ;
    } , [theme]) ;

    return [theme , toggleTheme] ;
}

export default useTheme;