import {useContext } from 'react'
import { TaskContext} from '../context/taskContext.jsx'

function TaskCard({task,}) {
  
  const { deleteTask } = useContext(TaskContext)

  return (
    <div className='bg-info text-white col-2 p-3 rounded-2'>
      <h2 className='fw-bolder text-capitalize'>{task.title}</h2>
      <p className='text-dark'>{task.description}</p>
      <button onClick={() => deleteTask(task.id)} className='btn btn-danger px-3 my-2'>
       Eliminar tarea
      </button>
    </div> 
  )
}

export default TaskCard