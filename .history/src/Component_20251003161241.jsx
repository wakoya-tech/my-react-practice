import React,{useState} from "react"
function Component(){
    const [count,setCount]=useState();
    

    function decrement(){
      setCount(count - 1)
    }
    function increment(){
        setCount(count +1)
    }
    function reset(){
        setCount(0)
    }

    return(<>
    <p>Count:count</p>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset </button>
    <button onClick={increment}>Increment</button>
    </>)
}
export default Component