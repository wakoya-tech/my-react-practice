
import React,{useState,useEffect} from "react";
function Amaya(){
    const [count, setCount]=useState(0);
    const [color,setColor]=useState("green");
   useEffect(()=>{
    document.title=`Count : ${count} ${color}`
   },[count,color]);
    function Add(){
      setCount(c=> c+1);
    }
    function Sub(){
        setCount(c=>c-1);
    }
    function colorHandle(){
        setColor(c=>c === "green" ?"red":"green")
    }
    return(<>
    <p style={{color:color}}>Count:{count}</p>
    <button onClick={Add}>Add</button>
    <button onClick={Sub}>Sub</button>
    <button type="color"  onClick={colorHandle}>Color Changer</button>
    <h1>well</h1>
    </>);
}
export default Amaya
