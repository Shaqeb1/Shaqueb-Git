import { useContext } from 'react'
import './Navbar.css'
import { UserContext } from '../../Context/UserContext'
import {Outlet, Link} from 'react-router-dom'
import { signOutUser } from '../../utils/firebase/firebase.utils'
const Navbar = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext)
  const signOutHandler = async() => {
    await signOutUser()
    setCurrentUser(null)
  }
  return (
    <>
    <nav className='navbar-container'>
        <div className='logo-container'>
          {/* Home Button / Logo */}
            <Link className='navbar-logo' to='/'>Threads</Link>
        </div>
        {/* SigIn And Cart button container */}
        <div className='navbar-button-container'>
            {currentUser ? (
            <span className='signIn-button' onClick={signOutHandler}>
              {' '}
              SIGN OUT{' '}
            </span>
          ) : (
            <Link className='signIn-button' to='/auth'>
              SIGN IN
            </Link>
          )}
            <div className='cart-button'>Cart</div>
        </div>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navbar

