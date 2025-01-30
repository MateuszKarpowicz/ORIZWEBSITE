import PropTypes from 'prop-types';
import { useState } from 'react';

function ReferenceCard({ reference }) {
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    window.open(reference.pdfUrl, '_blank');
  };

  return (
    <div onClick={handleClick} className="mini-card">
      <div className="mini-card__image-container">
        {imageError ? (
          <div className="mini-card__placeholder">
            {reference.schoolName}
          </div>
        ) : (
          <img
            src={reference.thumbnail}
            alt={reference.schoolName}
            className="mini-card__image"
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <div className="mini-card__content">
        <div className="mini-card__title-container">
          <h2 className="mini-card__title">{reference.schoolName}</h2>
        </div>
      </div>
    </div>
  );
}

ReferenceCard.propTypes = {
  reference: PropTypes.shape({
    id: PropTypes.string.isRequired,
    schoolName: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    pdfUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReferenceCard; 