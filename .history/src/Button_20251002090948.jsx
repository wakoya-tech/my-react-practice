function Button(){
const handleClick = (e)=>e.target.textContent="welcome";
const handleClick1 = (e)=>e.target.textContent="Anaa dhufu";
return(<>
<button onClick={(e)=>handleClick(e)}>Click me,
onDoubleClick={handleClick1(e).}</button>
</>)
}
export default Button