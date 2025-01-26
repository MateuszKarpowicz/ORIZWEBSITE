import PropTypes from 'prop-types';

function FullCard({ destination }) {
  return (
    <div className="full-card">
      <div className="full-card__image-container">
        <img 
          src={destination.mainImage} 
          alt={destination.title} 
          className="full-card__image"
        />
        <div className="full-card__price">
          od {destination.priceFrom}zł
        </div>
      </div>

      <div className="full-card__content">
        <h1 className="full-card__title">{destination.title}</h1>
        <div className="full-card__description">
          {destination.description}
        </div>
        
        <div className="full-card__details">
          {/* Tu dodamy szczegóły wycieczki */}
          <div className="full-card__detail">
            <span className="full-card__detail-label">Termin:</span>
            <span className="full-card__detail-value">Do ustalenia</span>
          </div>
          <div className="full-card__detail">
            <span className="full-card__detail-label">Długość:</span>
            <span className="full-card__detail-value">7 dni</span>
          </div>
          <div className="full-card__detail">
            <span className="full-card__detail-label">Transport:</span>
            <span className="full-card__detail-value">Samolot</span>
          </div>
        </div>

        <button className="full-card__button">
          ZAREZERWUJ
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
    priceFrom: PropTypes.number
  }).isRequired
};

export default FullCard; 