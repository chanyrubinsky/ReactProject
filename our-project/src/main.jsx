import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ListTask from "./Components/Task/ListTask.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
     <ListTask /> 
  </StrictMode>,
)
