import './Navbar.css';
import Logo from '../../ui/Logo/Logo';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container__upper">
        <div className="navbar__section navbar__section--left">
          <a href="/cooperation" className="navbar__link">WSPÓŁPRACA</a>
          <a href="/contact" className="navbar__link">KONTAKT</a>
        </div>

      
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
      
      </div>
      <div className="navbar__container__lower">
        <div className="navbar__filter">
         <div className="navbar__filter__button">
          <button className="navbar__filter__button__item">WYCIECZKI ZAGRANICZNE</button>
          <button className="navbar__filter__button__item">WYCIECZKI KRAJOWE</button>
          <button className="navbar__filter__button__item">OBOZY SPORTOWE</button>
          <button className="navbar__filter__button__item">OBOZY JĘZYKOWE</button>
          <button className="navbar__filter__button__item">ZAPROPONUJ WYCIECZKĘ</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 