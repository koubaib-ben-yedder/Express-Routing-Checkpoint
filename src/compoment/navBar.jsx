import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/navbar.css"
const NavBar = () => {
    const navigate=useNavigate();
  return (
    <div className="navbar">
        
       <div className="navbar-left">Shop</div>
       <div className="navbar-right">

            <a onClick={()=>navigate("/")}>Home</a>
            <a onClick={()=>navigate("/contact")}>Contact</a>
            <a onClick={()=>navigate("/services")}>Our services</a>

       </div>
     
    </div>
  )
}

export default NavBar