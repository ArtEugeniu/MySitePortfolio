import './ScrollToTop.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function ScrollToTop() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 600);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    isVisible && (
      <Link
        className='scroll-to-top'
        to='hero'
        offset={-60}
        smooth={true}
        duration={900}
        >
</Link>
    )
  )
}

export default ScrollToTop;