import './PortfolioSection.scss';
import ProjectCards from '../cards/ProjectCards/ProjectCards';

function PortfolioSection() {
  return (
    <section className="portfolio">
      <div className="container">
        <h2 className="portfolio__title">
          Portfolio
        </h2>

        <div className="portfolio__categories">
          <span>HTML & CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>API & Backend</span>
        </div>

        <div className="portfolio__grid">

          <ProjectCards />
          <ProjectCards />
          <ProjectCards />
          <ProjectCards />
          <ProjectCards />

        </div>
      </div>
    </section>
  )
}

export default PortfolioSection;