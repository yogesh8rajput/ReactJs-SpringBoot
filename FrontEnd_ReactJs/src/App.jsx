import { Suspense } from 'react'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <Suspense>
      <Home/>

    </Suspense>
    </>
  )
}

export default App
