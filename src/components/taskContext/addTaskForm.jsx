import { useContext,useState } from "react"
import { TaskContext } from "./TaskContext.jsx";

export const AddTask=()=>{

    const [taskDescription,setTaskDescription]=useState("");
    const { handleAddTask }=useContext(TaskContext)
    
    const handleInputChange=(e)=>{
        setTaskDescription(e.target.value)
    }
    const handleAddSubmit=(e)=>{
        e.preventDefault()
        handleAddTask(taskDescription)
        setTaskDescription("");
    }
    
    return(
        <form className="flex flex-row gap-4"onSubmit={handleAddSubmit}>
            <input className="w-96 h-12 rounded-2xl border-2 "onChange={handleInputChange}type="text" placeholder="Enter your task here" value={taskDescription}></input>
            <button className="justify-center align-middle rounded-2xl w-24 h-12 bg-blue-600  text-white font-semibold ">Add</button>
        </form>
    )
}