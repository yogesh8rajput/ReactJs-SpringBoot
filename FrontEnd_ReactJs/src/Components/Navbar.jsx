import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import clientbridge from '../images/h.png';


const Navbar = () => {
  // const { logout = () => {} } = useAuth();
  const { logout } = useAuth();
  // const isAuthenticated = useAuth();

  const navigate = useNavigate();
  const logoutUser = () => {
    logout();
    navigate("/");
  };
  return (
    <>

    {/* Navbar */}
          <nav className="bg-slate-900 text-white p-4 shadow-lg ">
          {/* <nav className="bg-gray-200 p-4 shadow-lg "> */}
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
              <div><img src={clientbridge} alt="CRM Hero" width="200" className="bg-slate-900" /></div>
              <ul className="flex space-x-6">
              <li>
            <Link to="/" >
              HOME 
            </Link>
          </li>
          <li>
            <Link to="/add" >
              ADD 
            </Link>
          </li>
          <li>
            <Link to="/register" >
              SIGNUP 
            </Link>
          </li>
          <li>
            <Link to="/login" >
              LOGIN 
            </Link>
          </li>
          <li>
            <Link to="/start" >
              Products 
            </Link>
          </li>
          <li className="border-2 border-gray-500 px-4 rounded-xl">
            <Link to="/search" >
              Search
              
            </Link>
          </li>
          {/* <li>
            <button onClick={logoutUser}>
              logout
             
            </button>
          </li> */}
              </ul>
            </div>
          {/* </nav> */}

                  {/* <div className="max-w-screen-xl mx-auto flex justify-between items-center"> */}
                    {/* <div><img src={clientbridge} alt="CRM Hero" width="200" /></div> */}
                    {/* <ul className="flex space-x-6 "> */}
                      {/* <li><a href="#home" className="hover:text-yellow-400 transition">Home</a></li> */}
                      {/* <li><a href="#services" className="hover:text-yellow-400 transition">Services</a></li> */}
                      {/* <li><a href="#features" className="hover:text-yellow-400 transition">Features</a></li> */}
                      {/* <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li> */}
                      {/* <li><a href="/login" className="hover:text-yellow-400 transition">Login</a></li> */}
                    {/* </ul> */}
                  {/* </div> */}
                </nav>

    </>
  );
};

export default Navbar;
