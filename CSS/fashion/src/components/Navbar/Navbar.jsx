import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='navbar-logo'>
                    34Threads
                </div>
            </div>
            <div className='navbar-category-container'>
                <div className='category-items-container'>
                    <a className='category-items' href="k">Men</a>
                    <a className='category-items' href="k">Women</a>
                    <a className='category-items' href="k">Shoes</a>
                    <a className='category-items' href="k">Bags</a>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar