import './Navbar.css';
import Logo from '../../ui/Logo/Logo';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__section navbar__section--left">
        <a href="/cooperation" className="navbar__link">WSPÓŁPRACA</a>
        <a href="/contact" className="navbar__link">KONTAKT</a>
      </div>

      <div className="navbar__section navbar__section--center">
        <Logo />
      </div>

      <div className="navbar__section navbar__section--right">
        <a href="/about" className="navbar__link">O NAS</a>
        <a href="/generator" className="navbar__button">GENERATOR OFERT</a>
      </div>
    </nav>
  );
}

export default Navbar; 