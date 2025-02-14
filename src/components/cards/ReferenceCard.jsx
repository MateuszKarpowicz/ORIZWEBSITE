import PropTypes from "prop-types";

function ReferenceCard({ reference }) {
  // Importujemy referencje dynamicznie
  const pdfPath = `../../assets/references/${reference.pdfUrl}`;
  const thumbnailPath = `/assets/references/thumbnails/${reference.pdfUrl.replace(
    ".pdf",
    ".png"
  )}`;

  return (
    <div className="mini-card-reference">
      <a
        href={pdfPath}
        target="_blank"
        rel="noopener noreferrer"
        className="mini-card__image-container-reference"
      >
        <img
          src={thumbnailPath}
          alt="Podgląd referencji"
          className="mini-card__image-reference"
        />
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
