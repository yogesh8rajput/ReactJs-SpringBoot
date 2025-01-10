import { Link, Route,Routes } from "react-router-dom";
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Product from "./Components/Product";

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="products/:product_id" element={<Product/>}/>
</Routes>
    </>
  )
}

export default App
