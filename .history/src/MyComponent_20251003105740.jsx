import React, {useState} from 'react';
function MyComponent(){
    const [name, setName] = useState("Guest");
    const [quantity,setQuantity]=useState();
    const [sex,setSex]=useState();
    const [comment,setComment]=useState();
   const [payment,setPayment]=useState();
   const [shipping,setShipping]=useState();
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
function shappingHanling(event){
    setShipping(event.target.value)
}
    return(<>
    
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
            <option value="visa">Visa</option>
             <option value="masterCard">MasterCard</option>
             <option value="GiftCard">GiftCard</option>
        </select>
        <p>Payment: {payment}</p>
        <label >
            <input type="radio" value="Pick up"
            checked={shipping==="Pick up"}
            onChange={shappingHanling} />
        Pick up
        </label>
        <label >  <input type="radio" value="Delivery"
            checked={shipping==="Delivery"}
            onChange={shappingHanling} />
            Delivery</label>
            <p>shipping: {shipping}</p>
        </div>

        </>
    );
}
export default MyComponent