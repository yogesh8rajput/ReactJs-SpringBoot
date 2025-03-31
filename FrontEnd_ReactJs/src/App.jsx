import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
// import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import AddProduct from "./Components/AddProduct";
import UpdateProduct from "./Components/UpdateProduct";
import Filter from "./Components/Filter";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import { AuthProvider } from "./Components/AuthContext";
import Dashboard from "./Components/Dashboard";
import UserCount from "./Components/UserCount";
import UserGraph from "./Components/UserGraph";
import Start from "./Components/Start";

function App() {
  return (
    <div>
    <AuthProvider>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/start" element={<Home />} />
        <Route
          path="/products/:product_id"
          element={
            <ProtectedRoute>
              <Product />
            </ProtectedRoute>
          }
        />
          <Route path="/add" element={<AddProduct />} />
        <Route path="products/update/:product_id" element={<UpdateProduct />} />
        <Route path="/search" element={<Filter />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/users" element={<UserCount />} />
        <Route path="/reports" element={<UserGraph />} />
      </Routes>
    </AuthProvider>

    </div>
  );
}

export default App;
