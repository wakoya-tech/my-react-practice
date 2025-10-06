import React, { useState } from "react";
function ColorPicker(){ 
      const [color,setColor]=useState("#FFFFFF")
   function handleColorChange(event){
    setColor(event.target.value);
   }
   return(<>
 <h1>Color Picker</h1>
 <div className="color-display" >Selected Color</div>
   <p>Selected color:</p>
   <label type="color" value={color}
   onChange={handleColorChange}>select a color</label>
    </>);
}
export default ColorPicker