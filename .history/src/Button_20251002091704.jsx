function Button(){
const handleClick = (e)=>e.target.textContent="welcome";
const handleClick1 = (e)=>e.target.textContent="Anaadhufu";
return(<>
<button onClick={(e)=>handleClick(e)}>Click me,
onDoubleClick={handleClick1}</button>
</>)
}
export default Button