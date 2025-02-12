import PropTypes from 'prop-types';

function ReferenceCard({ reference }) {
  // Importujemy referencje dynamicznie
  const pdfPath = `../../assets/references/${reference.pdfUrl}`;
  const thumbnailPath = `/assets/references/thumbnails/${reference.pdfUrl.replace('.pdf', '.png')}`;

  return (
    <div className="mini-card">
      <a 
        href={pdfPath}
        target="_blank"
        rel="noopener noreferrer"
        className="mini-card__image-container"
      >
        <img 
          src={thumbnailPath}
          alt="Podgląd referencji"
          className="mini-card__image"
        />
        <div className="reference-card__overlay" style={{ opacity: 0 }}>
          <span className="reference-card__view-text">Zobacz referencję</span>
        </div>
      </a>
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