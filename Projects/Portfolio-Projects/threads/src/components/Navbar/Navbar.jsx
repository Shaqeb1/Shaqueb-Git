import React from 'react'
import './Navbar.css'
import {Outlet, Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='navbar-container'>
        <div className='logo-container'>
            <Link className='navbar-logo' to='/'>Threads</Link>
        </div>
        <div className='navbar-button-container'>
            <div className='signIn-button'>SignIn</div>
            <div className='cart-button'>Cart</div>
        </div>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navbar