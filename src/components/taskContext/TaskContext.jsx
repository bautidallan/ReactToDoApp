import { useState, createContext, useEffect } from "react";

export const TaskContext = createContext();

export function TaskContextProvider({ children }) {

  const [list, setList] = useState(() => {
    
    const storedData = JSON.parse(localStorage.getItem("tasks")) || [];
    return storedData;
  });

  function deleteAll() {
    setList([]);
  }

  function handleAddTask(task) {
    setList([
      ...list,
      {
        title: task,
        id: list.length,
        done: false,
      },
    ]);
    localStorage.setItem("taskList", JSON.stringify(list));
  }

  function handleDeleteTask(taskId) {
    setList(list.filter((e) => e.id !== taskId));
  }

useEffect(() => {
    
    localStorage.setItem("tasks", JSON.stringify(list));
}, [list]);

function handleToggleTask(id) {

    // Copy the list and updates the object 
    const updatedList = list.map((task) => {
    if (task.id === id) {
        return {
        ...task,
          done: !task.done, // Changes the value of done
        };
    }
    return task
    });

    // Updates de state of list with a new list 
    setList(updatedList);

}

return (
    <TaskContext.Provider
      value={{
        list,
        handleAddTask,
        handleDeleteTask,
        deleteAll,
        handleToggleTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
