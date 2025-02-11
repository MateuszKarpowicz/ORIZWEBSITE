import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../ui/Logo";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const categories = [
    {
      id: "wycieczki-zagraniczne",
      label: "WYCIECZKI ZAGRANICZNE",
      path: "/wycieczki-zagraniczne",
    },
    {
      id: "wycieczki-krajowe",
      label: "WYCIECZKI KRAJOWE",
      path: "/wycieczki-krajowe",
    },
    {
      id: "obozy-sportowe",
      label: "OBOZY SPORTOWE",
      path: "/obozy-sportowe",
    },
    {
      id: "obozy-jezykowe",
      label: "OBOZY JĘZYKOWE",
      path: "/obozy-jezykowe",
    },
    {
      id: "zaproponuj-wycieczke",
      label: "ZAPROPONUJ WYCIECZKĘ",
      path: "/zaproponuj-wycieczke",
    },
  ];

  return (
    <nav className="navbar">
      <div className="navbar__container__upper">
        <div className="navbar__section navbar__section--left">
          <Link to="/references" className="navbar__link">
            REFERENCJE
          </Link>
          <Link to="/contact" className="navbar__link">
            KONTAKT
          </Link>
        </div>

        <div className="navbar__section navbar__section--center">
          <Logo />
        </div>

        <div className="navbar__section navbar__section--right">
          <Link to="/about" className="navbar__link">
            O NAS
          </Link>
          <Link to="/generator" className="navbar__button">
            GENERATOR OFERT
          </Link>
        </div>
      </div>

      <div className="navbar__container__lower">
        <div className="navbar__filter">
          <div className="navbar__filter__button">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={category.path}
                className={`navbar__filter__button__item ${
                  location.pathname === category.path
                    ? "navbar__filter__button__item--active"
                    : ""
                }`}
              >
                {category.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
