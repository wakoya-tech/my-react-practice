import { element } from "prop-types";
import React, { useState } from "react";

function Food() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods(f => [...f, newFood]);
  }
  function handleRemoved(index){
    
setFoods(foods.filter((_,i)=> i !== index));
  }

  return (
    <>
      <div>
        <h2>List of Food</h2>
        <ul>
          {foods.map((food, index) => (
            <li key={index} onClick={()=>handleRemoved(index)}>X{food}</li>
          ))}
              </ul>
        <input  type="text" id="foodInput" placeholder="Enter food name" />
        <button onClick={handleAddFood}>Add Food</button>
      </div>
    </>
  );
}

export default Food;
