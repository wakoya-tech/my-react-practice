import React,{useState}  from "react"
function Counter(){
    const [name,setName]=useState(Ebisa);
    const updateName=()=>{
        setName("wako");
    }
    return(<>
    <p>Name:{name}</p>
    <button onClick={updateName}>set Name</button>
    </>)
}
export default Counter