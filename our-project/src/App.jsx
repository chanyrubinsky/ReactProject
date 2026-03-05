import { useState } from 'react'
import './App.css'
import { ShabbatSettings } from './Components/home/ShabbatSettings.jsx';
import { ShabbatProvider } from './Components/context/ShabbatContext.jsx';
import  ListTask  from "./Components/Task/ListTask.jsx";

function App() {
  return (
    <ShabbatProvider>
      <ShabbatSettings />
      
      
    </ShabbatProvider>
  )
}

export default App
