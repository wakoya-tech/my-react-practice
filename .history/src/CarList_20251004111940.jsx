import { useState } from 'react';
function CarList(){
    const [Cars,setCars]=useState([]);
    const [carYear,setCarYear]=useState(new Date().getFullYear());
    const [carMake,setCarMake]=useState("");
    const [carModel,setCarModel]=useState("");
    function handleAddCar(){
        const newCar={
            year:carYear,
            make:carMake,
            model:carModel
        };
        setCars(c=>[...c,newCar]);
        setCarYear(new Date().getFullYear());

    }
    function handleRemovedCar(index){
        setCars(c=>c.filter((_,i)=> i !== index));
    }
    function handleYearChange(event){
setCarYear(event.target.value)
    }
    function handleMakeChange(event){
        setCarMake(event.target.value)
    }
    function handleModelChange(event){
        setCarModel(event.target.value)
    }
    return(<>
    <h2>List of Car Objects</h2>
    <u>
{Cars.map((car,index)=><li key={index}>{car.year} {car.make} {car.model}</li>)}
    </u>
    <input type="number" value={carYear} onChange={handleYearChange} />
    <br />
    <input placeholder="enter car make" type="text" value={carMake} onChange={handleMakeChange} />
    <br />
    <input placeholder='Enter car model' type="text" value={carModel} onChange={handleModelChange} />
   
   <br />
    <button onClick={handleAddCar}>Add car</button>
    </>)
}
export default CarList