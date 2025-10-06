import React,{useState} from "react";
function ToDoList(){
    const [tasks,setTasks]=useState([]);
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
 
return(<div className="to-do-list">
   <input type="text"
   placeholder="Enter a task..."
   value={newTask}
   onChange={handleInputChange} />
   <button className="add-button"
   onClick={AddTask}>Add</button>
    </div>);
}
export default ToDoList