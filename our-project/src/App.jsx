import { useState } from 'react'
import { EditShbbatSettings } from './Components/home/EditShabbatSettings'
import './App.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{ListCooking} from './Components/Cooking/listCooking.jsx' 
import { ShopingList } from "../src/Components/shoping/ShopingList.jsx";
function App() {
  return (
    <>
      <ShopingList/>
       <EditShbbatSettings />  
         {/* <ListCooking />  */}
         {/* <ListTask />  */}

    </>
  )
}

export default App
