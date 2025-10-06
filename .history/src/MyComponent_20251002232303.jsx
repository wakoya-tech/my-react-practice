import React, {useState} from 'react';
function MyComponent(){
    const [name, setName] = useState("Guest");
    const [quantity,setQuantity]=useState();
    const [sex,setSex]=useState();
    function handleNameChange(event){
        setName(event.target.value);
}
function handleQuantityChange(event){
    setQuantity(event.target.value);
}
function handleSex(event){
    setSex(event.target.value);
}
    return(
        <div>
     <input value={name} onChange={handleNameChange}/>
       <p>Name:{name}</p>
       <input type='number' value={quantity}onChange={handleQuantityChange} />
        <p>Quantity: {quantity}</p>
        <input type="" onChange={handleSex} />
       <p>sex:{sex}</p>
        </div>
    );
}
export default MyComponent