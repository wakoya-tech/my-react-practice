import React,{useState} from "react";
function Com(){
    const [car,setCar]=useState(
       { Year:2025,
        make:"Ford",
        model:"mustang"
       });
    return(<>
    <p>my favorite  car is {car.Year} {car.make} {car.model}</p>
   <input type="number" value={car.Year} /><br />
   <input type="text" value={car.make} /><br />
   <input type="text" value={car.model} /><br />
    </>)
}
export default Com