import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ImageCarousel from "../ui/ImageCarousel";
import programLondyn from '/assets/programs/program-londyn.pdf';
import programMalta from "/assets/programs/program-malta.pdf";
import programUsa from "/assets/programs/program-usa.pdf";
import programNeapol from "/assets/programs/program-neapol.pdf";
import programLizbona from "/assets/programs/program-lizbona.pdf";
import programEdynburg from "/assets/programs/program-edynburg.pdf";
import programBarcelona from "/assets/programs/program-barcelona.pdf";
import programAteny from "/assets/programs/program-ateny.pdf";
import programKrakow from "/assets/programs/program-krakow.pdf";
// ... inne importy programów

function FullCard({ destination }) {
  const navigate = useNavigate();
  const [showGallery, setShowGallery] = useState(false);

  // Mapowanie slugów na pliki PDF
  const programFiles = {
    londyn: programLondyn,
    malta: programMalta,
    usa: programUsa,
    neapol: programNeapol,
    lizbona: programLizbona,
    edynburg: programEdynburg,
    barcelona: programBarcelona,
    ateny: programAteny,
    krakow: programKrakow,
  };

  return (
    <div className="full-card">
      <div className="full-card__header">
        <div className="full-card__content">
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
            onClick={() => {
              if (programFiles[destination.slug]) {
                window.open(
                  programFiles[destination.slug],
                  "_blank",
                  "noopener,noreferrer"
                );
              }
            }}
            className="full-card__action-button"
          >
            PROGRAM
          </button>
          <button
            onClick={() => setShowGallery(true)}
            className="full-card__action-button"
          >
            GALERIA
          </button>
          <button
            onClick={() =>
              window.open(
                "https://oferty.oriz.pl",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="full-card__action-button"
          >
            GENERATOR OFERT
          </button>
        </div>
      </div>

      {showGallery && destination.gallery && (
        <ImageCarousel
          images={destination.gallery}
          onClose={() => setShowGallery(false)}
        />
      )}
    </div>
  );
}

FullCard.propTypes = {
  destination: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    mainImage: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    gallery: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default FullCard;
