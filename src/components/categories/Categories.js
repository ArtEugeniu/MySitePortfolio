import './Categories.scss';

function Categories({ activeCategory, onCategoryChange }) {

  const categoriesArr = ['All', 'HTML/CSS', 'JavaScript', 'React'];


  function isActive(item) {
    return item === activeCategory ? 'categories__button-active' : '';
  }

  function getIconClass(index) {
    switch (index) {
      case 1:
        return 'categories__button--html-css';
      case 2:
        return 'categories__button--js';
      case 3:
        return 'categories__button--react';
      default:
        return '';
    }
  }

  return (
    <div className="categories">
      <div className="container">
        <ul className="categories__list">
          {categoriesArr.map((item, index) => {
            return <li className="categories__item" key={index}>
              <button className={`categories__button ${isActive(item)} ${getIconClass(index)}`} type="button" onClick={() => onCategoryChange(item)}>
                {item}
              </button>
            </li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Categories;