import React from 'react'
import './Categories.css'
import {Link} from 'react-router-dom'
const Categories = () => {
  return (
    // Categories 
    <div className='categories-container'>
        <ul className='categories-items'>
           <Link to='/men' className='category-item'>Men</Link>
           <Link to='/women' className='category-item'>Women</Link>
           <Link to='/bags' className='category-item'>Bags</Link>
           <Link to='/shoes' className='category-item'>Shoes</Link> 
        </ul>
    </div>
  )
}

export default Categories