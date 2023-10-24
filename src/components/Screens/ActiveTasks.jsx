import { TaskContext, TaskContextProvider } from "../taskContext/TaskContext"
import { ActiveList } from "../taskContext/ActiveList"




export const ActiveTask=()=>{

    return (
        <>
        <TaskContextProvider >
            <ActiveList />
        </TaskContextProvider>
        </>
    )  
}