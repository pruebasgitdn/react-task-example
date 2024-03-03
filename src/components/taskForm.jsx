import { useState,useContext } from "react"
// Importamos el contexto y use context
// Para que este acceda a todas las propiedadesd el taskContext

import {TaskContext} from '../context/taskContext.jsx'

export function TaskForm() {
  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")

  // Importamos la funcion createtask del tasksContext.Provider values, (los valores de las funciones que pasamos)
  const { createTask } = useContext(TaskContext)


  const handleSubmit = (e)=>{
    e.preventDefault()
    createTask(title,description)
    setTitle('')
    setDescription('')
  }

  return (

    <div className="">
      
       <form onSubmit={handleSubmit} className="bg-primary p-5 mb-3 w-50 mx-auto rounded-2 ">
       <h2 className="text-center text-white">Crea tu tarea</h2>
      <input type="text" placeholder="Escribe tu tarea" onChange={(e)=>{
        setTitle(e.target.value)
      }} value={title} className="form-control my-2" autoFocus/>
      <textarea name="" placeholder="Describe la tarea" cols="30" rows="2" onChange={e =>{setDescription(e.target.value)}} value={description} className="form-control" ></textarea>
      <button className="btn btn-success w-100 my-2">Guardar tarea</button>

    </form>
    </div>
   
  )
}
