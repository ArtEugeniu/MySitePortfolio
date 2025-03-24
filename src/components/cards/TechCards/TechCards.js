import './TechCards.scss';
import techCardData from '../../../assets/data/techCardsData.json';

function cardTitleModifClass(title) {
  switch (title) {
    case 'HTML/CSS':
      return 'card__title--html';
    case 'JavaScript':
      return 'card__title--js';
    case 'React':
      return 'card__title--react';
    case 'Git/GitHub':
      return 'card__title--git';
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