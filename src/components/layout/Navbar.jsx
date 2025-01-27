import { Link, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo';
import { useCategory } from '../../context/CategoryContext';

function Navbar() {
  const { activeCategories, toggleCategory } = useCategory();
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  
  const categories = [
    { id: 'wycieczki-zagraniczne', label: 'WYCIECZKI ZAGRANICZNE' },
    { id: 'wycieczki-krajowe', label: 'WYCIECZKI KRAJOWE' },
    { id: 'obozy-sportowe', label: 'OBOZY SPORTOWE' },
    { id: 'obozy-jezykowe', label: 'OBOZY JĘZYKOWE' },
    { id: 'zaproponuj-wycieczke', label: 'ZAPROPONUJ WYCIECZKĘ' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar__container__upper">
        <div className="navbar__section navbar__section--left">
          <Link to="/cooperation" className="navbar__link">WSPÓŁPRACA</Link>
          <Link to="/contact" className="navbar__link">KONTAKT</Link>
        </div>

        <div className="navbar__section navbar__section--center">
          <Logo />
        </div>

        <div className="navbar__section navbar__section--right">
          <Link to="/about" className="navbar__link">O NAS</Link>
          <Link to="/generator" className="navbar__button">GENERATOR OFERT</Link>
        </div>
      </div>

      {isMainPage && (
        <div className="navbar__container__lower">
          <div className="navbar__filter">
            <div className="navbar__filter__button">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`navbar__filter__button__item ${
                    activeCategories.has(category.id) ? 'navbar__filter__button__item--active' : ''
                  }`}
                  onClick={() => toggleCategory(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;  