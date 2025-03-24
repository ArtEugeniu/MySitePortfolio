import Nav from "../nav/Nav";
import './Header.scss'
import { useEffect, useState } from "react";

function Header() {

  const [headerHeight, setHeaderHeight] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const header = document.querySelector('.header');
    setHeaderHeight(header.offsetHeight);

    function handleScroll() {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
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