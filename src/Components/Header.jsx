import React, { useState } from 'react'
import  "./header.css"
import { Link, NavLink } from 'react-router-dom'

import useOnlineStatus from '../utils/useOnlineStatus'
function Header() {
    const [btn,setBtn]=useState("Login")
    const onlineStatus=useOnlineStatus()
   
    return (
        <div className='header'>
            <div className='nav'>
                <img className='logo' src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Emblem.png" alt="" />
                <ul>
                    <li>Network:{onlineStatus?"🟢":"🔴"}</li>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>about</Link></li>
                    <li><Link to={"/offers"}>offers</Link></li>
                    <li><Link to={"/help"}>Help</Link></li>
<li><button className='Login-Button' onClick={()=>{
    btn==="Login"?setBtn("Logout"):setBtn("Login")
}}>{btn}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header