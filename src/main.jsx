import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { TaskContextProvider } from './context/taskContext.jsx'

/* The following line can be included in your src/index.js or App.js file */

import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <TaskContextProvider>
    <App/>
  </TaskContextProvider>
  
)
