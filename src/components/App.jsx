import { Home } from './Screens/Home.jsx'
import Title from './Title.jsx'
import { Routes,Route } from 'react-router-dom'
import { NavBar } from './NavBar.jsx'
import { ActiveTask } from './Screens/ActiveTasks.jsx'
import { DoneTask } from './Screens/DoneTasks.jsx'

function ToDoApp() {

  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <Title titleName={'#ToDoAPP'}/>
      <NavBar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='active-tasks' element={<ActiveTask />}/>
          <Route path='done-tasks' element={<DoneTask />}/>
      </Routes>
    </div>
      
  )
}

export default ToDoApp
