import React,{useState,useEffect} from "react";
function Window(){
    const [width,setWidth]=useState(window.innerWidth);
    const [height,setHeight]=useState(window.innerHeight);

    return(<>
    <p>window width :{width}px</p>
    <p>window height:{height}px</p>
    </>)
}
export default Window