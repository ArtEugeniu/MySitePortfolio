import Nav from "../nav/Nav";
import './Header.scss'
import { useEffect, useState } from "react";
// import Hero from '../hero/Hero'

function Header() {

  const [headerHeight, setHeaderHeight] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {

    function actualHeaderHeight() {
      const header = document.querySelector('.header').offsetHeight;
      setHeaderHeight(header);
    }

    actualHeaderHeight();


    function handleScroll() {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', actualHeaderHeight);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', actualHeaderHeight);
    } 
    
  }, [])

  return (
    <header className={`header ${isScrolled ? 'header__scroled' : ''}`}>
      <div className="container">
        <Nav headerHeight={headerHeight} />
      </div>
    </header>
  )
}

export default Header;