import { DeleteButton } from "../taskContext/DeleteAll"
import { TaskContextProvider } from "../taskContext/TaskContext"
import { DoneList } from "../taskContext/DoneList"

export const DoneTask=()=>{
    return (
        <>
        <TaskContextProvider>
            <DoneList />
            <DeleteButton />
        </TaskContextProvider>
        </>
    )
}