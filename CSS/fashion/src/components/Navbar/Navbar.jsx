import React from 'react'
import './Navbar.css'
import {Outlet, Link} from 'react-router-dom'
import SignIn from '../../routes/sign-in/SignIn'

const Navbar = () => {
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='navbar-logo'>
                    <Link to='/'>34Threads</Link>
                </div>
                <div className='signIn-button'>SignIn</div>
                <div className='bag-button'>Bag</div>
            </div>
            <div className='navbar-category-container'>
                <div className='category-items-container'>
                    <Link className='category-items' to='/men'>Men</Link>
                    <Link className='category-items' to='/women'>Women</Link>
                    <Link className='category-items' to='/shoes'>Shoes</Link>
                    <Link className='category-items' to='/bags'>Bags</Link>
                </div>
            </div>
            <SignIn/>
        </nav>
        <Outlet/>
    </>
  )
}

export default Navbar