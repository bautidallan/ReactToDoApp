import { TaskCard } from "./TaskCard";
import { TaskContext } from "./TaskContext"
import { useContext } from "react"

export const TaskList=()=>{

    const { list }=useContext (TaskContext);
    
    
    if (list.length===0){
        return (
            <div>
                <span>No hay tareas aun</span>
            </div>
        )
    }

    else {
        return(
            <div>
                <ul className="flex flex-col justify-start ">
                    { list.map(element=>
                    <TaskCard 
                        key={element.id}
                        task={element}
                    />
                    )}
                </ul>
        </div>
    )}
}