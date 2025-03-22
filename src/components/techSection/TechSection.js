import TechCards from '../cards/TechCards/TechCards'
import './TechSection.scss'

function TechSection() {
  return (
    <section className="tech">
      <div className="container"> 
        <h2 className="tech__title">Tech Stack</h2>
        <ul className="tech__list">
          <li className="tech__item">
          <TechCards />
          </li>
          <li className="tech__item">
          <TechCards />
          </li>
          <li className="tech__item">
          <TechCards />
          </li>
          <li className="tech__item">
          <TechCards />
          </li>
          <li className="tech__item">
          <TechCards />
          </li>
          <li className="tech__item">
          <TechCards />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default TechSection;

