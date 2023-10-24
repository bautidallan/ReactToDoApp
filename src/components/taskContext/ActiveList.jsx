import { useContext } from "react";
import { TaskContext } from "./TaskContext";

export const ActiveList=()=>{
    const { list }=useContext(TaskContext)
    const active=list.filter(e=>e.done===false)
    if (active.length===0){
        return(
            <>
            <span>No hay tareas aun</span>
            </>
        )
    }
    else{

    
    return(
        <ul>
            {active.map(e=>
            <li className="flex flex-row gap-3 p-4 text-lg" key={e.id}>
                <span>{e.title}</span>
            </li>)}
        </ul>
    )
    }
}