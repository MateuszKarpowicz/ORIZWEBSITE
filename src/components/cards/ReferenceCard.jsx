import PropTypes from 'prop-types';

function ReferenceCard({ reference }) {
  const handleClick = () => {
    window.open(reference.pdfUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div onClick={handleClick} className="mini-card reference-card">
      <div className="mini-card__image-container">
        <embed 
          src={reference.pdfUrl}
          type="application/pdf"
          className="mini-card__image"
        />
        <div className="reference-card__overlay">
          <span className="reference-card__view-text">Zobacz referencję</span>
        </div>
      </div>
    </div>
  );
}

ReferenceCard.propTypes = {
  reference: PropTypes.shape({
    id: PropTypes.string.isRequired,
    pdfUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReferenceCard; 