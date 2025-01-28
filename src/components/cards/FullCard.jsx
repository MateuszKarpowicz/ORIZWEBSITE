import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function FullCard({ destination }) {
  const navigate = useNavigate();

  return (
    <div className="full-card">
      <div className="full-card__header">
        <div className="full-card__title-circle">
          <h1 className="full-card__title">{destination.title}</h1>
        </div>
        <div className="full-card__image-container">
          <img 
            src={destination.mainImage} 
            alt={destination.title} 
            className="full-card__image"
          />
        </div>
        <div className="full-card__description">
          {destination.description}
        </div>
      </div>

      <div className="full-card__actions">
        <button 
          onClick={() => navigate(`/program/${destination.slug}`)}
          className="full-card__action-button"
        >
          PROGRAM
        </button>
        <button 
          onClick={() => navigate(`/galeria/${destination.slug}`)}
          className="full-card__action-button"
        >
          GALERIA
        </button>
        <button 
          onClick={() => navigate('/generator')}
          className="full-card__action-button"
        >
          GENERATOR OFERT
        </button>
      </div>
    </div>
  );
}

FullCard.propTypes = {
  destination: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    mainImage: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired
  }).isRequired
};

export default FullCard; 