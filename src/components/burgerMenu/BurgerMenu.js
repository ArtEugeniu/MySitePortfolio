import './BurgerMenu.scss';
import { useRef } from 'react';



function BurgerMenu({ toggleBurger, isBurgerOpen, burgerButton }) {






  return(
    <div className={`header__burger-menu ${isBurgerOpen ? 'header__burger-menu--active' : ''}`} onClick={toggleBurger} ref={burgerButton}>
      <span></span>
    </div>
  )
}

export default BurgerMenu;