import './PortfolioSection.scss';
import ProjectCards from '../../cards/ProjectCards/ProjectCards';
import Categories from '../../categories/Categories';
import { useState } from 'react';

function PortfolioSection() {

  const [ activeCategory, setActiveCategory] = useState("All");

  function onCategoryChange (category) {
    setActiveCategory(category)
  }

  return (
    <section className="portfolio">
      <div className="container">
        <h2 className="portfolio__title section-title">
          Portfolio
        </h2>

       <Categories onCategoryChange={onCategoryChange} activeCategory={activeCategory} />

        <div className="portfolio__grid">

          <ProjectCards activeCategory={activeCategory}/>

        </div>
      </div>
    </section>
  )
}

export default PortfolioSection;