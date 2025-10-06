import React, {useState} from 'react';
function MyComponent(){
    const [name, setName] = useState("Guest");
    const [quantity,setQuantity]=useState();
    function handleNameChange(event){
        setName(event.target.value);
}
function handleQuantityChange(event){
    setQuantity(event.target.value);
}
    return(
        <>
     <input value={name} onChange={handleNameChange}/>
       <p>Name:{name}</p>
       <input type="number" value={quantity}onChange={handleNameChange} />
        <p>Quantity: {quantity}</p>
        </>
    );
}
export default MyComponent