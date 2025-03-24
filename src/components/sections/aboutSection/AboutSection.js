import './AboutSection.scss';
import myPhoto from '../../../assets/images/my-photo.jpg';
import aboutMeData from '../../../assets/data/aboutMeData.json'

function AboutSection() {
  return (
    <section className='about' id="about">
      <div className="container">

        <h2 className="about__title section-title">About Me</h2>
        <div className="about__content">
          <img className='about__img' src={myPhoto} alt="Artemiev Eugeniu photo" />
          <div className="about__text">
            {Object.entries(aboutMeData[0]).map(([key, value]) => {
              return <p className='about__paragraph' key={key}>{value}</p>
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;