import  { TaskContext }from'./TaskContext.jsx';
import { useContext } from 'react';

export const DeleteButton=()=>{
    
    const { deleteAll} = useContext(TaskContext)
    

    return (
        <div className='flex flex-row justify-end items-center text-lg'>
            <button className=' bg-red-600  m-1 rounded font-bold text-xs text-white p-2 flex-shrink-0 w-24 h-9' onClick={deleteAll}>Delete all</button>
        </div>
        )
}