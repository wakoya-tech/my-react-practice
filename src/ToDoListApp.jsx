import React,{useState} from "react"
function ToDoListApp (){
    const [tasks,setTasks]=useState(["ciree nyaadhu","nafa dhiqadhu","hara galfadhu" ]);
    const [newTask,setNewTask]=useState("");
   function handleInputChange(event){
    setNewTask(event.target.value);
   }
    function AddList(){
if(newTask.trim() !== ""){
setTasks(t=>[...t,newTask]);
setNewTask("");
}
   }
   function Remove(index){
const updatedTasks=tasks.filter((_,i)=> i !==index);
setTasks(updatedTasks);
   }
   function moveUp(index){
    if(index > 0){
const updatedTasks=[...tasks];
[updatedTasks[index],updatedTasks[index - 1]]=[updatedTasks[index-1],updatedTasks[index]];
setTasks(updatedTasks);
    }
   }
   function moveDown(index){
    if(index < tasks.length -1){

    
const updatedTasks=[...tasks];
[updatedTasks[index],updatedTasks[index + 1]]=[updatedTasks[index + 1],updatedTasks[index]];
setTasks(updatedTasks);
    }
   }
   return(<div className="to-do-list">
<h2>To-do-list</h2>
<div>
  <input value={newTask}type="text" placeholder="Enter a task" onChange={handleInputChange}
/>
<button className="add-button" onClick={AddList}>Add</button>
      
</div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => Remove(index)}>Delete</button>
            <button className="move-button" onClick={() => moveUp(index)}>👆</button>
            <button className="move-button" onClick={() =>moveDown(index)}>👇</button>
          </li>
        ))}
      </ol>
    </div>);
}

export default ToDoListApp