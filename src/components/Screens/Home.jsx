import  { AddTask } from "../taskContext/addTaskForm.jsx"
import { TaskList } from '../taskContext/TaskList.jsx'
import { TaskContextProvider } from '../taskContext/TaskContext.jsx'

export const Home=()=>{
    return(
        <>
        <TaskContextProvider>
            <AddTask />
            <TaskList />
        </TaskContextProvider>
        </>
    )
}