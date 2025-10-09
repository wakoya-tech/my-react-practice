function Button(){
const handleClick = (e)=>e.target.textContent="welcome";
const handleClick1 = (e)=>e.target.textContent="Anaadhufu";
return(<>
<button onClick={(e)=>handleClick(e)}
onDoubleClick={handleClick1}>click me</button>

</>)
}
export default Button
