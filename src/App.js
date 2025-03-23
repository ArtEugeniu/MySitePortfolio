import './App.scss'
import Header from "./components/header/Header";
import Hero from './components/hero/Hero';
import TechSection from './components/sections/techSection/TechSection';
import AboutSection from './components/sections/aboutSection/AboutSection';
import PortfolioSection from './components/sections/portfolioSection/PortfolioSectioin';
import AchivementSection from './components/sections/achivementSection/AchivementSection';
import ContactSection from './components/sections/contactSection/ContactSection'

import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutSection />
      <TechSection />
      <PortfolioSection />
      <AchivementSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
