import './index.scss'
import { Link } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'

const Sidebar = () => {
  ;<div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={LogoS} alt='logo' />
      <img src={LogoS} alt='logo' />
    </Link>
  </div>
}

export default Sidebar
