import './Navbar.css'
import { Link } from 'react-router-dom'
import Temple from '../assets/temple.svg'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Navbar() {
  const { user } = useAuthContext()
  const { logout, isPending } = useLogout()
  return (
    <div className='navbar'>
      <ul>
        <li className='logo'>
          <img src={Temple} alt='dojo logo' />
          <span>The Dojo</span>
        </li>
        {!user && (
          <>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/signup'>Signup</Link>
            </li>
          </>
        )}
        {user && (
          <li>
            {!isPending && (
              <button className='btn' onClick={logout}>
                Logout
              </button>
            )}
            {isPending && (
              <button className='btn' disabled onClick={logout}>
                Logging out...{' '}
              </button>
            )}
          </li>
        )}
      </ul>
    </div>
  )
}
