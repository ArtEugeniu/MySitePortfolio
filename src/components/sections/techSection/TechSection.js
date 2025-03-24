import TechCards from '../../cards/TechCards/TechCards'
import './TechSection.scss'

function TechSection() {
  return (
    <section className="tech" id="tech">
      <div className="container"> 
        <h2 className="tech__title section-title">Tech Stack</h2>
        <TechCards />
      </div>
    </section>
  )
}

export default TechSection;

