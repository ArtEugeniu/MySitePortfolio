import './ProjectCards.scss'
import projectCardData from '../../../assets/data/projectCardData.json';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';


function ProjectCards({ activeCategory }) {

  const [isOpenPopup, setIsOpenPopup] = useState(false);

  let filteredProjects

  console.log(projectCardData)

  if (activeCategory === 'All') {
    filteredProjects = projectCardData;
  } else {
    filteredProjects = projectCardData.filter(item => item.category === activeCategory);
  }

  const hadnleGithubClick = (item) => {
    if (item.title === 'Taxi Project') {
      setIsOpenPopup(true)
    } else {
      window.open(item.github, '_blank', 'noopener,noreferrer');
    }
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
                <button onClick={() => hadnleGithubClick(item)} target="_blank" rel="noopener noreferrer" className="projectCards__btn projectCards__btn--github">GitHub</button>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="projectCards__btn projectCards__btn--live-demo">Live Demo</a>
              </div>

            </motion.div>
          )
        })}
      </AnimatePresence>

      {isOpenPopup && (
        <div className="popup-overlay" onClick={() => setIsOpenPopup(false)}>
          <div className="popup-content">
            <h2>Warning!</h2>
            <p>GitHub repository for this project is private.</p>
            <button onClick={() => setIsOpenPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectCards;