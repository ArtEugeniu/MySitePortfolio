import logo from '../../images/logo.svg';
import './Nav.scss';

function Nav() {
  return (
    <nav className="nav">
      <a href="#"><img className="nav__img" src={logo} alt="logo" /></a>
      <ul className='nav__list'>
        <li className='nav__item'><a href="#">Home</a></li>
        <li className='nav__item'><a href="#">About Me</a></li>
        <li className='nav__item'><a href="#">Portfolio</a></li>
      </ul>
    </nav>

  )
}

export default Nav;