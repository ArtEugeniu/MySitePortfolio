import { useState, useEffect} from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Hero from './components/hero/Hero';
import TechSection from './components/sections/techSection/TechSection';
import AboutSection from './components/sections/aboutSection/AboutSection';
import PortfolioSection from './components/sections/portfolioSection/PortfolioSectioin';
import AchivementSection from './components/sections/achivementSection/AchivementSection';
import ContactSection from './components/sections/contactSection/ContactSection';
import AdaptiveMessage from './components/adaptiveMessage/AdaptiveMessage';

import Footer from './components/footer/Footer';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 950);

  useEffect(() => {
    function checkScreenSize() {
      setIsMobile(window.innerWidth <= 950);
    }

    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="App">
      {isMobile ? (
        <AdaptiveMessage />
      ) : (
        <>
          <Header />
          <Hero />
          <AboutSection />
          <TechSection />
          <PortfolioSection />
          <AchivementSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
