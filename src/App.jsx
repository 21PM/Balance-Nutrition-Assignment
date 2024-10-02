import { useState } from 'react'
import Navbar from './Components/Navbar'
import HeroPage from './Components/HeroPage'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <HeroPage/>
    </>
  )
}

export default App
