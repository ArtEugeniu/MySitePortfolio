import './ProjectCards.scss'
import projectImg from '../../../images/project-example.jpg'

function ProjectCards() {
  return (
    <div className="projectCard">
      <img src={projectImg} alt="" className="projectCard__img" />
      <h3 className="projectCard__title">
        SimpleFood
      </h3>
      <p className="projectCard__description">
        veryveryveyreyvyevyreyvryeryvyeryveyryv short description!
      </p>
      <div className="buttons">
        <a href="#" target="_blank" rel="noopener noreferrer" className="btn github">GitHub</a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="btn live-demo">Live Demo</a>
      </div>
    </div>
  )
}

export default ProjectCards;