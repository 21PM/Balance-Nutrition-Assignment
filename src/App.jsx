import { useState } from 'react'
import Navbar from './Components/Navbar'
import HeroPage from './Components/HeroPage'
import './App.css'
import store from './Store/Store'
import { Provider } from 'react-redux'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
    <Navbar/>
    <HeroPage/>
    </Provider>
    </>
  )
}

export default App
