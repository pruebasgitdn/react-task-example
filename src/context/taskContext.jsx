/*
Este componente es el que abarca todos los componentes, es decir, el componente mayor que contiene todas las variables y donde todos los componentes pueden acceder a ellas
*/ 
import { tasks as data } from '../data/task.js'

// importamos la funcion
import {createContext,useState,useEffect} from 'react'

// createContext te permite crear un contexto que los componentes pueden proporcionar o leer y lo importamo.
export const TaskContext = createContext()

// Creamos el contenedor del nombre del contexto = TaskContent 
export function TaskContextProvider(props) {
  const [tasks,setTasks] = useState([])

  function createTask (taskTitle,taskDesc){
    /*
      ...task => copia todo lo que tenga el array tasks

      .task => uy añade lo que le pase task
      [...task,task]
    */ 
    setTasks([...tasks,{
      title: taskTitle,
      id: tasks.length,
      description: taskDesc
    }])

  }

  function deleteTask(taskID){
    // Establecer nuevo estado
    setTasks(tasks.filter(task => task.id !== taskID))
  }

  
  /*use effect se ejecuta cuando carga el componente Tasklist*/
  useEffect(() => {
    // Es decir que cuando cargue el componente tasklist, task[vacio] = settask[data]
    setTasks(data)
  },[ ])


  return (
    /*
    Context.Provider
    Envuelva sus componentes en un proveedor de contexto para especificar el valor de este contexto para todos los componentes adentro
    */ 
    <TaskContext.Provider value={{
      // Pasamos el array y funciones como key value
      tasks:tasks,
      deleteTask: deleteTask,
      createTask: createTask
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}
