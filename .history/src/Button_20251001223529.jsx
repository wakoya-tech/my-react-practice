function Button(){
    const handleClick = () =>console.log("what!");
       const handleClick2 =(name)=>console.log('${name}stop clicking me');
    return(
        <> 
        <button onClick={handleClick2("bro")}>Click me</button>
        </>
    );
}
export default Button