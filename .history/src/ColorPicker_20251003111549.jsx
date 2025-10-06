function ColorPicker(){ 
      const [color,setColor]=useState("#FFFFFF")
   function handleColorChange(event){
    setColor(event.target.value)
   }
   return(<>
 <h1>Color Picker</h1>
 <div className="color-display">Selected Color</div>
   <p>Selected color:</p>
    </>);
}
export default ColorPicker