import React, { useState } from "react";
function ColorPicker(){ 
      const [color,setColor]=useState("#FFFFFF")
   function handleColorChange(event){
    setColor(event.target.value);
   }
   return(<div className="color-picker-container">
 <h1>Color Picker</h1>
 <div className="color-display" style={{backgroundColor:color}}>Selected Color</div>
   <p>Selected color:{color}</p>
 <label > select a color</label>
   <input type="" value={color} onChange={handleColorChange} />
    </div>);
}
export default ColorPicker