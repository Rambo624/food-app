import React, { useState } from 'react'
import  "./header.css"
import { Link } from 'react-router-dom'

import useOnlineStatus from '../utils/useOnlineStatus'
import { useSelector } from 'react-redux'





function Header() {
    const [btn,setBtn]=useState("Login")
    const onlineStatus=useOnlineStatus()

const cartItems =useSelector((store)=>store.cart.items)
   
    return (
        <div className='header'>
            <div className='nav'>
                <img className='logo' src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Emblem.png" alt="" />
                <ul>
                    <li >Network:{onlineStatus?"🟢":"🔴"}</li>
                    <li className=' hover:text-orange-300'><Link className='text-current no-underline' to={"/"}>Home</Link></li>
                    <li><Link className='text-current no-underline'  to={"/about"}>about</Link></li>
                    <li><Link className='text-current no-underline' to={"/offers"}>offers</Link></li>
                    <li ><Link className="flex items-center text-current no-underline" to={"/cart"}><img className='w-6 mr-1' src="https://www.svgrepo.com/show/94662/shopping-cart.svg" alt="" /><span>({cartItems.length})</span></Link></li>
                    
                    <li><Link className='text-current no-underline' to={"/help"}>Help</Link></li>
<li><button className='Login-Button' onClick={()=>{
    btn==="Login"?setBtn("Logout"):setBtn("Login")
}}>{btn}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header