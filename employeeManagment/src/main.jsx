import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthContext from './components/Auth/context/AuthContext.jsx'
import TaskContext from './components/Auth/context/TaskContext.jsx'

localStorage.clear()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <TaskContext>
        <App />
      </TaskContext>
    </AuthContext>
  </StrictMode>,
)
