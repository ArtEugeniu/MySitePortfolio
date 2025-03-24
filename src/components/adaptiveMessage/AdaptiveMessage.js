import { useState, useEffect } from 'react';
import './AdaptiveMessage.scss';

function AdaptiveMessage() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 950);

  function checkScreensize() {
    setIsMobile(window.innerWidth <= 950)
  }

  useEffect(() => {
    checkScreensize();
    window.addEventListener('resize', checkScreensize)

    return () => {
      window.removeEventListener('resize', checkScreensize);
    };
  }, []);

  if (!isMobile) return null;

  return (

    <div className="adaptive-message">
      <p>
        The responsive version of the site is still under development. Please use a device with a larger screen for a better experience.
      </p>
    </div>

  )
}

export default AdaptiveMessage;