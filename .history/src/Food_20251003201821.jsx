import React,{useState} from "react"
function Food(){
    const [food,setFood]=useState(["Apple","Orange","Banana"]);
   function addFood(event){
    setFood(event.target.value);
   }
   return(<>
    <h1>List of Food</h1>
    <ul>{food}</ul>
    <input type="text" value={food} onChange={addFood}/>
    </>)
}
export default Food