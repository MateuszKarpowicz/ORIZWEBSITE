import { Link, useNavigate } from "react-router-dom";
import { useCategory } from "../../context/CategoryContext";
import logo from "../../assets/images/logo.svg";

console.log("Logo image path:", logo); // debugging

function Logo() {
  const navigate = useNavigate();
  const { resetCategories } = useCategory();

  const handleLogoClick = (e) => {
    e.preventDefault();
    resetCategories(); // Reset filtrów
    navigate("/"); // Przekierowanie na główną
  };

  console.log("Próba załadowania logo z:", logo); // debugging

  return (
    <Link to="/" className="logo" onClick={handleLogoClick}>
      <img
        src={logo}
        alt="Logo firmy"
        className="logo__image"
        onError={(e) => {
          console.error("Błąd ładowania logo:", e);
          console.log("Pełna ścieżka:", e.target.src);
        }}
        onLoad={() => console.log("Logo załadowane pomyślnie")}
      />
    </Link>
  );
}

export default Logo;
