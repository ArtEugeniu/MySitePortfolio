import './App.scss'
import Header from "./components/header/Header";
import Hero from './components/hero/Hero';
import TechSection from './components/techSection/TechSection';
import AboutSection from './components/aboutSection/AboutSection';
import PortfolioSection from './components/portfolioSection/PortfolioSectioin';
import AchivementSection from './components/achivementSection/AchivementSection';
import ContactSection from './components/contactSection/ContactSection';

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
