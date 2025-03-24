import './Hero.scss'
import HeroImage from '../../assets/images/hero-background.jpg'

function Hero() {
  return (
    <section className="hero" id="home"> 
      <div className="container">
        <div className="hero__content">
          <h1 className='hero__title'>
            Hi, I'm <span className='hero__title--name-color'>Artemiev Eugeniu</span>
          </h1>
          <p className='hero__subtitle'>
            Welcome to my personal portfolio site
          </p>
          <p className='hero__description'>
            As a Frontend Developer, I craft responsive and user-friendly web experiences using modern technologies.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero;