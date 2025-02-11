import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

function MiniCard({ destination }) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link to={`/destination/${destination.slug}`} className="mini-card">
      <div className="mini-card__image-container">
        {imageError ? (
          <div className="mini-card__placeholder">{destination.title}</div>
        ) : (
          <img
            src={destination.mainImage}
            alt={destination.title}
            className="mini-card__image"
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <div className="mini-card__content">
        {destination.category !== 'zaproponuj-wycieczke' ? (
          <div className="mini-card__price">ZAPLANUJ WYCIECZKĘ</div>
        ) : null}
        <div className="mini-card__title-container">
          <h2 className="mini-card__title">{destination.title}</h2>
        </div>
      </div>
    </Link>
  );
}

MiniCard.propTypes = {
  destination: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default MiniCard;
