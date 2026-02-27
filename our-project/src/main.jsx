<<<<<<< HEAD
import { createRoot } from "react-dom/client";
import App from './App.jsx';
import { shopingContextProvider as ShopingContextProvider } from "./shopingContext/shoping.context.jsx";
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import{ListCooking} from './Components/Cooking/listCooking.jsx' 
import { ShopingList } from "../src/Components/shoping/ShopingList.jsx";
import App from './App.jsx'
//import ListTask from "./Components/Task/ListTask.jsx";
>>>>>>> 7903e5593d475869b242c587a22c231f42d55beb

createRoot(document.getElementById('root')).render(
  <ShopingContextProvider>
    <App />
<<<<<<< HEAD
  </ShopingContextProvider>
);
=======

  </StrictMode>,
  
)
>>>>>>> 7903e5593d475869b242c587a22c231f42d55beb
