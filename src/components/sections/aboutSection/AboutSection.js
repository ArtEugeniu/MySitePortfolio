import './AboutSection.scss'
import myPhoto from '../../../assets/images/my-photo.jpg'

function AboutSection() {
  return (
    <section className='about'>
      <div className="container">

        <h2 className="about__title section-title">About Me</h2>
        <div className="about__content">
          <img className='about__img' src={myPhoto} alt="Artemiev Eugeniu photo" />
          <div className="about__text">
            <p>I’ve always been aware of the IT world, but I never believed I could succeed in it. For many years, I focused on my career in the hospitality industry, working at places like Accor’s Mercure Hotel and Radisson Blu. However, over time, I felt a personal shift and decided to give IT a try.</p>

            <p>Starting from scratch, I quickly realized there are many paths for a developer. After some reflection, I chose web development, particularly front-end, because it’s constantly evolving and never boring. I started with HTML and CSS, which weren’t easy at first, but I pushed through and completed a web development course.
            </p>

            <p>Then came JavaScript. It was challenging, but I dedicated myself to learning it, and soon I was building simple interfaces and games. React followed shortly after, catching my attention because of its popularity and dynamic nature. Although it was a step up from JavaScript, my foundation in JS made learning React faster. Now, I focus more on practice, and my portfolio site is where I showcase both my early works and recent projects.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;