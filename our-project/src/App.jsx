import { useState } from 'react'
import './App.css'
import { ShabbatSettings } from './Components/home/ShabbatSettings.jsx';
import { ShabbatProvider } from './Components/context/ShabbatContext.jsx';

function App() {
  return (
    <ShabbatProvider>
      <ShabbatSettings />
    </ShabbatProvider>
  )
}

export default App
