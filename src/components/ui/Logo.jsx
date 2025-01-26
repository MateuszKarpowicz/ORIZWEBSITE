import { Link, useNavigate } from 'react-router-dom';
import { useCategory } from '../../context/CategoryContext';
import logoImage from '../../assets/images/logo.svg';

console.log('Logo image path:', logoImage); // debugging

function Logo() {
  const navigate = useNavigate();
  const { resetCategories } = useCategory();

  const handleLogoClick = (e) => {
    e.preventDefault();
    resetCategories(); // Reset filtrów
    navigate('/'); // Przekierowanie na główną
  };

  return (
    <Link to="/" className="logo" onClick={handleLogoClick}>
      <img 
        src={logoImage} 
        alt="ORIZ" 
        className="logo__image"
        onError={(e) => {
          console.error('Error loading logo:', e);
          e.target.style.border = '1px solid red';
        }}
      />
    </Link>
  );
}

export default Logo; 