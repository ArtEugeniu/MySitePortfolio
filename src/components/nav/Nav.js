import logo from '../../assets/images/logo.svg';
import './Nav.scss';

function Nav() {

  const navArr = ['Home', 'About Me', 'Tech Stack', 'Portfolio', 'Certificates', 'Contact'];

  function setAnchors(index) {
    switch (index) {
      case 0: {
        return "#home";
      }
      case 1: {
        return "#about";
      }
      case 2: {
        return "#tech";
      }
      case 3: {
        return "#portfolio";
      }
      case 4: {
        return "#achivement";
      }
      case 5: {
        return "#contact";
      }
    }
  }


  return (
    <nav className="nav">
      <a href="#home"><img className="nav__img" src={logo} alt="logo" /></a>
      <ul className='nav__list'>
        {navArr.map((item, index) => {
          return <li className='nav__item' key={item + index}>
            <a href={`${setAnchors(index)}`}>{item}</a>
          </li>
        })}
      </ul>
    </nav>

  )
}

export default Nav;