import Taskslist from './components/taskslist.jsx'
import { TaskForm } from './components/taskForm.jsx'



function App(){
  
  
  return (
    <div className='bg-dark overflow-auto m-0 p-0 vh-100'>
      <div className="mx-auto container pt-4 ">
        <TaskForm/>
        <Taskslist/>
      </div>
      
    </div>
  )
  

}

export default App