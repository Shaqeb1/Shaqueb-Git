import React from 'react'
import Avatar from '../assets/account_circle_FILL0_wght400_GRAD0_opsz48.svg'

const Navbar = () => {
  return (
    <nav className='navbar bg-base-100 border border-b-2'>
    <div className='flex-1'>
      <a href="link" className='btn btn-ghost normal-case text-xl'>
        CrownClothing
      </a>
    </div>
    <div className='flex-none'>
      <div className='dropdown dropdown-end'>
        <label htmlFor="" tabIndex={0} className='btn btn-ghost btn-circle'>
          <div className='indicator'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className='badge badge-sm indicator-item'>0</span>
          </div>
        </label>
        <div tabIndex={0} className='mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow'>
          <div className='card-body'>
            <span className='font-bold text-lg'>0 Items</span>
            <span className='text-info'>Subtotal: 0$</span>
            <div className='card-actions'>
              <button className='btn btn-primary btn-block'>View Cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className='dropdown dropdown-end'>
        <label htmlFor="" className='btn btn-ghost btn-circle avatar' tabIndex={0}>
          <div className='w-10 rounded-full'>
            <img src={Avatar} alt="user" />
          </div>
        </label>
        <ul tabIndex={0} className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
          <li>
            <a href="link" className='justify-between'>
              Profile
            </a>
          </li>
          <li>
            <a href="link">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar