import { Link, Route,Routes } from "react-router-dom";
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Product from "./Components/Product";
import AddProduct from "./Components/AddProduct";
import UpdateProduct from "./Components/UpdateProduct";
import Search from "./Components/Search";
import Filter from "./Components/Filter";

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="products/:product_id" element={<Product/>}/>
    <Route path="products/update/:product_id" element={<UpdateProduct/>}/>
    <Route path="/add" element={<AddProduct/>}/>
    <Route path="/search" element={<Filter/>}/>
</Routes>
    </>
  )
}

export default App
