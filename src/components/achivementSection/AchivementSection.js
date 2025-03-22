import './AchivementSection.scss';
import AchivementCards from '../cards/AchivementCards/AchivementCards'; 

function AchivementSection() {
  return(
    <section className="achivement">
      <div className="container">
        <h2 className="achivement__title">
          My sertificates
        </h2>

        <AchivementCards/>
      </div>
    </section>
  )
}

export default AchivementSection;