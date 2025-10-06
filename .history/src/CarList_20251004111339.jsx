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
    function handleYearChange(){

    }
    function handleMakeChange(){
        
    }
    function handleModelChange(){
        
    }
    return(<>
    <h2>List of Car Objects</h2>
    <u>

    </u>
    <input type="number" value={carYear} onChange={handleYearChange} />
    <br />
    <input placeholder="enter car make" type="text" value={carMake} onChange={handleMakeChange} />
    <br />
    <input placeholder='Enter car model' type="text" value={carModel} onChange={handleModelChange} />
    </>)
}
export default CarList