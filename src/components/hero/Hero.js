import './Hero.scss'
import { Link } from 'react-scroll';

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
          <Link
            className='hero__anchor'
            to='portfolio'
            smooth={true}
            offset={-60}
            duration={900}
          >View Portfolio</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero;