import { useState } from 'react'
import './App.css'
import Chips from './components/chips/Chips'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Chips/>
    </>
  )
}

export default App
