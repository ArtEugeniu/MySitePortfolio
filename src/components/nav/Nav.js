import logo from '../../assets/images/logo.svg';
import './Nav.scss';
import { Link } from 'react-scroll';
import { useRef, useEffect } from 'react';


function Nav({ headerHeight, isBurgerOpen, toggleBurger, burgerButton }) {

  const burgerMenu = useRef();
  const navArr = ['Home', 'About Me', 'Tech Stack', 'Portfolio', 'Certificates', 'Contact'];

  function setAnchors(index) {
    switch (index) {
      case 0: {
        return "home";
      }
      case 1: {
        return "about";
      }
      case 2: {
        return "tech";
      }
      case 3: {
        return "portfolio";
      }
      case 4: {
        return "achivement";
      }
      case 5: {
        return "contact";
      }
    }
  }

  useEffect(() => {
    function handleClickOutsideBurger(event) {
      if (
        burgerMenu.current && burgerMenu.current.contains(event.target)
      ) {
        return;
      }

      if (
        burgerButton.current && burgerButton.current.contains(event.target)
      ) {
        return;
      }

      if (isBurgerOpen) {
        toggleBurger();
      }
    }

    document.addEventListener('click', handleClickOutsideBurger);

    return () => {
      document.removeEventListener('click', handleClickOutsideBurger);
    };
  }, [isBurgerOpen]);




  return (
    <nav className="nav">
      <Link to="home" smooth={true} offset={-headerHeight} duration={900}>
        <img className="nav__img" src={logo} alt="logo" />
      </Link>

      <ul className={`nav__list ${isBurgerOpen ? 'nav__list--active' : ''}`} ref={burgerMenu}>
        {navArr.map((item, index) => {
          return <li className='nav__item' key={item + index}>
            <Link
              to={setAnchors(index)}
              smooth={true}
              offset={-headerHeight}
              duration={900}
              className='nav__link'
            >
              {item}
            </Link>
          </li>
        })}
      </ul>
    </nav>

  )
}

export default Nav;