import React,{useState} from "react";
function Com(){
    const [car,setCar]=useState(
       { Year:2025,
        make:"Ford",
        model:"mustang"
       });
       function handlingYear(event){
        setCar(car=>({...car,Year: event.target.value}));
       }
       function handlingMake(event){
           
        setCar({...car, make:event.target.value});
       }
       function handlingModal(event){
        setCar({...car,model:event.target.value});
       }
    return(<>
    <p>my favorite  car is {car.Year} {car.make} {car.model}</p>
   <input placeholder="what" type="number" value={car.Year} onChange={handlingYear} /><br />
   <input type="text" value={car.make} onChange={handlingMake}/><br />
   <input type="text" value={car.model} onChange={handlingModal} /><br />
    </>)
}
export default Com
