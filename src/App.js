import { useState, useEffect } from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Hero from './components/hero/Hero';
import TechSection from './components/sections/techSection/TechSection';
import AboutSection from './components/sections/aboutSection/AboutSection';
import PortfolioSection from './components/sections/portfolioSection/PortfolioSectioin';
import AchivementSection from './components/sections/achivementSection/AchivementSection';
import ContactSection from './components/sections/contactSection/ContactSection';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import Footer from './components/footer/Footer';




function App() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  function toggleBurger() {
    setIsBurgerOpen(prevState => !prevState);
  };

  return (
    <div className="App">

        <Header isBurgerOpen={isBurgerOpen} toggleBurger={toggleBurger}/>
        <Hero />
        <AboutSection />
        <TechSection />
        <PortfolioSection />
        <AchivementSection />
        <ContactSection />
        <ScrollToTop />
        <Footer />
      

    </div>
  );
}

export default App;
