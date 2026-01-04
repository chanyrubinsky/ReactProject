import { useState } from 'react'
import {EditShbbatSettings} from './Components/home/EditShabbatSettings'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EditShbbatSettings/>
    </>
  )
}

export default App
