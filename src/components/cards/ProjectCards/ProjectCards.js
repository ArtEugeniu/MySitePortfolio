import './ProjectCards.scss'
import projectCardData from '../../../assets/data/projectCardData.json';
import { motion, AnimatePresence } from 'framer-motion';


function ProjectCards({ activeCategory }) {

  let filteredProjects

  if (activeCategory === 'All') {
    filteredProjects = projectCardData;
  } else {
    filteredProjects = projectCardData.filter(item => item.category === activeCategory);
  }


  return (
    <div className='projectCards'>
      <AnimatePresence>
        {filteredProjects.map(item => {

          const image = require(`../../../assets/images/${item.imageURL}`);

          return (
            <motion.div
              className="projectCards__card"
              key={item.id}
              layout
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.4 }}
            >

              <a className="projectCards__image-link" href={item.link} target='_blank'>
                <span>Visit the live demo</span>
                <img className="projectCards__img" src={image} alt="project card" />
              </a>

              <h3 className="projectCards__title">
                {item.title}
              </h3>
              <p className="projectCards__description">
                {item.description}
              </p>
              <div className="projectCards__buttons">
                <a href={item.github} target="_blank" rel="noopener noreferrer" className="projectCards__btn projectCards__btn--github">GitHub</a>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="projectCards__btn projectCards__btn--live-demo">Live Demo</a>
              </div>

            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}

export default ProjectCards;