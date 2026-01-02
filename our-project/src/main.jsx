import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{ListCooking} from './Components/Cooking/listCooking.jsx' 
import App from './App.jsx'
import ListTask from "./Components/Task/ListTask.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ListCooking/>
    <ListTask/>
  </StrictMode>,
)
