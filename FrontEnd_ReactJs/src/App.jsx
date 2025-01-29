import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import AddProduct from "./Components/AddProduct";
import UpdateProduct from "./Components/UpdateProduct";
// import Search from "./Components/Search";
import Filter from "./Components/Filter";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="products/:product_id"
          element={
            <ProtectedRoute>
              <Product />
            </ProtectedRoute>
          }
        />
        <Route path="products/update/:product_id" element={<UpdateProduct />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/search" element={<Filter />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
