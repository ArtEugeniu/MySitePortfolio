import './AchivementCards.scss';
import CertificateCardData from '../../../assets/data/certificateData.json';

function AchivementCards() {
  return (
    <ul className="certificateCards">
      {CertificateCardData.certificates.map((item, index) => {

        const image = require(`../../../assets/images/${item.imageURL}`);

        return <li className="certificateCards__item" key={item + index}>
          <img src={image} alt="" className="certificateCards__image" />
          <h2 className="certificateCards__title">{item.title}</h2>
          <div className="certificateCards__description">
            <span>Platform: {item.platform}</span>
            <span>Status: {item.date}</span>
          </div>
        </li>
      })}
    </ul>
  )
}

export default AchivementCards;