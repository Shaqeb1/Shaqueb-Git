import React from 'react'
import './Navbar.css'
import {Outlet, Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='navbar-container'>
        <div className='logo-container'>
          {/* Home Button / Logo */}
            <Link className='navbar-logo' to='/'>Threads</Link>
        </div>
        {/* SigIn And Cart button container */}
        <div className='navbar-button-container'>
            <Link to='/signIn' className='signIn-button'>SignIn</Link>
            <div className='cart-button'>Cart</div>
        </div>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navbar