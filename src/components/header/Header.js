import Nav from "../nav/Nav";
import './Header.scss'

function Header() {
  return(
    <header className="header" id="home">
      <div className="container">
        <Nav/>
      </div>
    </header>
  )
}

export default Header;