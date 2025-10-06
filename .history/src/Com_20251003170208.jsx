import React,{useState} from "react";
function Com(){
    const [car,setCar]=useState(
       { Year:2025,
        make:"Ford",
        model:"mustang"
       });
       function handlingYear(event){
        setCar(event.target.value);
       }
       function handlingMake(event){
        setCar(event.target.value);
       }
       function handlingModal(event){
        setCar(event.target.value);
       }
    return(<>
    <p>my favorite  car is {value.Year} {value.make} {value.model}</p>
   <input type="number" value={car.Year} onChange={handlingYear} /><br />
   <input type="text" value={car.make} onChange={handlingMake}/><br />
   <input type="text" value={car.model} onChange={handlingModal} /><br />
    </>)
}
export default Com