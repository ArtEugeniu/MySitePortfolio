import './AchivementSection.scss';
import AchivementCards from '../../cards/AchivementCards/AchivementCards'; 

function AchivementSection() {
  return(
    <section className="achivement" id="achivement">
      <div className="container">
        <AchivementCards/>
      </div>
    </section>
  )
}

export default AchivementSection;