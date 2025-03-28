import './AchivementCards.scss';
import CertificateCardData from '../../../assets/data/certificateData.json';
import { useState } from 'react';

function AchivementCards() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <>
      <ul className="certificateCards">
        {CertificateCardData.certificates.map((item, index) => {

          const image = require(`../../../assets/images/${item.imageURL}`);

          return (
            <li className="certificateCards__item" key={item + index}>
              <img src={image} alt="" className="certificateCards__image" onClick={() => setSelectedImage(image)} />
              <h2 className="certificateCards__title">{item.title}</h2>
              <div className="certificateCards__description">
                <span>Platform: {item.platform}</span>
                <span>Status: {item.date}</span>
              </div>
            </li>
          )
        })}
      </ul>
      { 
        selectedImage && (
          <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
            <div className="modal-content">
              <img src={selectedImage} alt="" className='modal-image'/>
            </div>
          </div>
        )
      }
    </>
  )
}

export default AchivementCards;