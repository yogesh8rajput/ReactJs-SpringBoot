import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearchengin } from "react-icons/fa6";
import { ImHome } from "react-icons/im";
import { MdAddToPhotos } from "react-icons/md";
import { FaSignInAlt } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { useAuth } from "./AuthContext";
import { PiArrowFatLinesDownDuotone } from "react-icons/pi";
import { BiLogOutCircle } from "react-icons/bi";

const Navbar = () => {
  // const { logout = () => {} } = useAuth();
  const { logout } = useAuth();
  const isAuthenticated = useAuth();

  const navigate = useNavigate();
  const logoutUser = () => {
    logout();
    navigate("/");
  };
  return (
    <>
      <div className="bg-gray-200 h-full p-4 flex justify-evenly">
        <div className="text-5xl">Products</div>
        <ul className="flex gap-4 items-center ">
          <li>
            <Link to="/" className="flex gap-1">
              HOME <ImHome className="text-2xl" />
            </Link>
          </li>
          <li>
            <Link to="/add" className="flex gap-1">
              ADD <MdAddToPhotos className="text-2xl" />
            </Link>
          </li>
          <li>
            <Link to="/register" className="flex gap-1">
              SIGNUP <SiGnuprivacyguard className="text-2xl" />
            </Link>
          </li>
          <li>
            <Link to="/login" className="flex gap-1">
              LOGIN <FaSignInAlt className="text-2xl" />
            </Link>
          </li>
          <li className="border-2 border-gray-500 p-2 rounded-xl">
            <Link to="/search" className="text-slate-600 flex gap-2 ">
              Search
              <FaSearchengin className="text-2xl text-black" />
            </Link>
          </li>
          <li>
            <button onClick={logoutUser}>
              logout
              <BiLogOutCircle className="text-2xl text-black" />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
