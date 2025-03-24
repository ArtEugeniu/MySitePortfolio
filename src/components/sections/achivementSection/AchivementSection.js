import './AchivementSection.scss';
import AchivementCards from '../../cards/AchivementCards/AchivementCards'; 

function AchivementSection() {
  return(
    <section className="achivement" id="achivement">
      <div className="container">
        <h2 className="achivement__title section-title">My Certificates</h2>
        <AchivementCards/>
      </div>
    </section>
  )
}

export default AchivementSection;