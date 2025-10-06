import React,{useState} from "react";
function ToDoList(){
    const [tasks,setTasks]=useState(["Eat Breakfast","Take a Shower","theater"]);

    const [newTask,setNewTask]=useState("");
 function handleInputChange(event){
setNewTask(event.target.value)
 }
    function AddTask(){

 }
 function handleRemoved(index){

 }
 function handleMoveUp(){

 }
 function handleMoveDown(index){

 }
 
return(
<div className="to-do-list">
    <h2>To-Do-List</h2>
    <div> 
         <input type="text"
   placeholder="Enter a task..."
   value={newTask}
   onChange={handleInputChange} />
   <button className="add-button"
   onClick={AddTask}>Add</button>
   </div>
   <ol>
    {tasks.map((task,index)=>
    <li key={index} >
       
        <span className="text">{task}</span>
    <button className="delete-button"
    onClick={()=>handleRemoved(index)}>Delete
    </button>
    
    <button className="move-button"
    onClick={()=>handleMoveUp(index)}>
        👆</button>
    
    <button className="move-button"
    onClick={()=>handleMoveDown(index)}>👇</button>
    </li>)}
   </ol>

    </div>);

    
}
export default ToDoList