import TaskCard from './taskCard.jsx'
import {useContext } from 'react'
import {TaskContext} from '../context/taskContext.jsx'

function Taskslist() {

  // Le pasamos ell array que necesita para funcionar
  const { tasks} = useContext(TaskContext)
  
  if(tasks.length ==0){
    return <h2 className='text-white text-center'>No hay tareas</h2>
  }

  return (
    <div className='row gap-3'>
      {
        tasks.map((task,i)=> (
            <TaskCard key={i} task={task}/>
        ))
      }
    </div>
  )
}
export default Taskslist