import React, {useState} from 'react';
function MyComponent(){
    const [name, setName] = useState("Guest");
    const [quantity,setQuantity]=useState();
    const [sex,setSex]=useState();
    const [comment,setComment]=useState();
   const [payment,setPayment]=("");
    function handleNameChange(event){
        setName(event.target.value);
}
function handleQuantityChange(event){
    setQuantity(event.target.value);
}
function handleSex(event){
    setSex(event.target.value);
}
function commentHandle(event){
    setComment(event.target.value)
}
function handlePayment(event){
    setPayment(event.target.value)
}
    return(
        <div>
     <input placeholder='name' value={name} onChange={handleNameChange}/>
       <p>Name:{name} </p>
       <input placeholder='quantity' type='number' value={quantity}onChange={handleQuantityChange} />
        <p>Quantity: {quantity}</p>
        <input placeholder='sex' type="" onChange={handleSex} />
       <p>sex:{sex}</p>
       <textarea  value={comment} onChange={commentHandle} placeholder='comment here'></textarea>
       
        <p>Comment:{comment}</p>
        <select value={payment} onChange={handlePayment}>
            <option value=" ">Select an option</option>
        </select>
        </div>
    );
}
export default MyComponent