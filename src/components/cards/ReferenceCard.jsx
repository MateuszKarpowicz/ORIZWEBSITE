import PropTypes from 'prop-types';

function ReferenceCard({ reference }) {
  const pdfPath = `/references/${reference.pdfUrl}`;

  return (
    <div className="mini-card">
      <a 
        href={pdfPath}
        target="_blank"
        rel="noopener noreferrer"
        className="mini-card__image-container"
      >
        <embed 
          src={pdfPath}
          type="application/pdf"
          className="mini-card__image"
        />
        <div className="reference-card__overlay"></div>
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