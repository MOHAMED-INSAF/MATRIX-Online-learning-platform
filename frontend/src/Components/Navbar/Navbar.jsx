import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>MATRIX</p>
        </div>
        <ul className="nav-menu">
            <li onClick={() => {setMenu("home")}}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("community")}}><Link style={{ textDecoration: 'none' }} to='/community'>Community</Link>{menu==="community"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("study")}}><Link style={{ textDecoration: 'none' }} to='/study'>Study</Link>{menu==="study"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("store")}}><Link to='/store'><img src={cart_icon} alt="" /></Link>{menu==="store"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login">
            <Link to='/loginsignup'><button>Login</button></Link>
        </div>
    </div>
  )
}

export { Navbar };