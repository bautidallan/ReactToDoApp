import { useContext } from "react"
import { BsFillTrashFill } from "react-icons/bs"
import { TaskContext } from "./TaskContext";


export const TaskCard=({task})=>{

    const  { handleDeleteTask,handleToggleTask }=useContext(TaskContext)

    const handleDoneTask=()=>{
        handleToggleTask(task.id)

    } 
    return (
        <li className="flex flex-row gap-3 p-4 text-lg">
            <input
            onChange={handleDoneTask}
            type="checkbox"
           // checked={isDone}
            readOnly
            />
            {task.done ? (<s>{task.title}</s>) : (<span>{task.title}</span> )}
            <button onClick={() => handleDeleteTask(task.id)}><BsFillTrashFill/></button>
        </li>
        );
    };
    

