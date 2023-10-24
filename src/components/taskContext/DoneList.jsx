import { useContext } from "react";
import { TaskContext } from "./TaskContext";
import { BsFillTrashFill } from "react-icons/bs"

export const DoneList=()=>{
const { list,handleDeleteTask }=useContext(TaskContext)

const done=list.filter(e=>e.done===true)



return(
    <ul className="flex flex-col gap-4 justify-center items-center">
        {done.map(e=>
        <li className="flex flex-row gap-3 p-4 text-lg justify-center items-center" key={e.id}>
            <s><span>{e.title}</span></s>
            <BsFillTrashFill  onClick={() => handleDeleteTask(e.id)}/>
        </li>)}
    </ul>
)
}