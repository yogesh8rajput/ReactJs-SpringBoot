import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaSearchengin } from "react-icons/fa6";
import { ImHome } from "react-icons/im";
import { MdAddToPhotos } from "react-icons/md";
import { FaSignInAlt } from "react-icons/fa";

class Navbar extends Component{

    render(){
        return(
        <>
        <div className='bg-gray-200 h-full p-4 flex justify-evenly'>

<div className='text-5xl'>Products</div>
<ul className="flex gap-4 items-center ">
    <li ><Link to="/" className="flex gap-1">HOME <ImHome className="text-2xl"/></Link></li>
    <li><Link to="/add" className="flex gap-1">ADD <MdAddToPhotos className="text-2xl"/></Link></li>
    <li><Link to="/register" className="flex gap-1">SIGNIN <FaSignInAlt className="text-2xl"/></Link></li>
    <li className="border-2 border-gray-500 p-2 rounded-xl"><Link to="/search" className="text-slate-600 flex gap-2 ">Search<FaSearchengin className="text-2xl text-black" /></Link></li>
</ul>
</div>
        </>
        )
    }
}

export default Navbar;