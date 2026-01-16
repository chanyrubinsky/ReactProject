import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import{ListCooking} from './Components/Cooking/listCooking.jsx' 
import { ShopingList } from "../src/Components/shoping/ShopingList.jsx";
import App from './App.jsx'
//import ListTask from "./Components/Task/ListTask.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

  </StrictMode>,
  
)
