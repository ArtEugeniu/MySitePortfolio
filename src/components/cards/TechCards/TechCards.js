import './TechCards.scss';
import techCardData from '../../../assets/data/techCardsData.json';

function cardTitleModifClass(title) {
  switch (title) {
    case 'HTML':
      return 'card__title--html';
    case 'JavaScript':
      return 'card__title--js';
    case 'React':
      return 'card__title--react';
    case 'Git/GitHub':
      return 'card__title--git';
    case 'CSS':
      return 'card__title--css';
    case 'SCSS':
      return 'card__title--scss';
    case 'BEM Methodology':
      return 'card__title--bem';
    case 'TypeScript':
      return 'card__title--ts'
    default:
      return '';
  }
}

function TechCards() {
  return (
    <ul className="card">
      {techCardData.technologies.map((item, index) => {
        return <li className="card__item" key={item + index}>
          <div className="card__wrapper">
            <h2 className={`card__title ${cardTitleModifClass(item.title)}`}>
              {item.title}
            </h2>
            <p className="card__text">
              {item.description}
            </p>
          </div>
        </li>
      })}
    </ul>
  )
}

export default TechCards;