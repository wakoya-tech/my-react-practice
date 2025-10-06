import React,{useState}  from "react"
function Counter(){
    const [name,setName]=useState("Ebisa");
    const [Age,setAge] =useState(0);
    const [isEmployed,setisEmployed]=useState(false);
    const toggleEmployedStatus =()=>{
        setisEmployed(!isEmployed)
    }
    const updateName=()=>{
        setName("wako");
    }
    const incrementAge=()=>{
        setAge(Age+1)
    }
    return(<>
    <p>Name:{name}</p>
    <button onClick={updateName}>set Name</button>
    <p>Age:{Age}</p>
    <button onClick={incrementAge}>Increment Age</button>
   <p>is employed</p>
   <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </>)
    

}
export default Counter