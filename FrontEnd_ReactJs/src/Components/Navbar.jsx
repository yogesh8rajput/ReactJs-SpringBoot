import React, { Component } from "react";

class Navbar extends Component{

    render(){
        return(
        <>
        <div className='bg-gray-200 h-full p-4 flex justify-evenly'>

<div className='text-5xl'>E-Commerce</div>
<ul className="flex gap-4 items-center ">
    <li><a href="">HOME</a></li>
    <li><a href="">ABOUT</a></li>
    <li><a href="">CONTACT</a></li>
    <li><a href="">CATEGORIES</a></li>
    <li><a href="">EXTRA</a></li>
</ul>
</div>
        </>
        )
    }
}

export default Navbar;