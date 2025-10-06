import React, { useState } from "react";

function Counter(){
    const [name, setName] = useState("Ebisa");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    const updateName = () => {
        setName("wako");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    return(
    <>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>

        <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </>
    )
}

export default Counter;
